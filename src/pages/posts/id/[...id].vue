<template>
  <main class="h-full p-4">
    <div class="mb-4">
      <div class="flex mb-1" style="margin-left: 26px;">
        Tags:
        <div class="flex ml-3 gap-1">
          <div v-for="(tag, idx) in tags" class="btn btn-xs btn-primary" :key="idx" @click="clickTag(tag)">
            {{ tag }}
          </div>
        </div>
      </div>
      <div>
        Created: <span class="ml-2">{{ created }}</span>
      </div>
    </div>
    <div class="divider"></div>
    <article class="prose prose-stone mx-auto w-full">
      <ContentRenderer :value="doc">
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </article>
    <div class="divider"></div>
    <div class="comment-container">
      <div v-show="!commentLoading" ref="vueUtterances">
        <!-- utterances script here -->
      </div>
      <div v-show="commentLoading" class="comment-loading-div">
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ContentDocs',
  data() {
    return {
      doc: null,
      tags: [],
      created: null,
      utterancesConfig: null,
      commentLoading: true,
    }
  },
  async created() {
    const { path } = useRoute()

    const [_, mdPath] = path.split('/id')
    const data = await queryContent(mdPath).findOne()
    this.doc = data
    this.tags = data.tags.split(',')
    this.created = data.created

    await this.checkIssueExsit()
  },
  methods: {
    clickTag(tag) {
      this.$router.push(`/tags/id/${tag}`)
    },
    async checkIssueExsit() {
      const { data, error } = await useLazyAsyncData('count', () => $fetch('/github-api/repos/JunjaK/nuxt3-blog-template/issues', {
        method: 'GET'
      }))

      if (error.value) return
      const postTitle = this.doc.title ?? (this.doc?.body?.children[0].children[0].value ?? '')
      const issueTitle = `${postTitle}_${this.doc.created}`
      const checkIssue = data.value.find((e) => e.title === issueTitle)
      if (checkIssue) {
        const issueNum = checkIssue.number
        this.bindGithubComment(issueNum)
      }
      else {
        const issueNum = await this.createIssue(issueTitle)
        this.bindGithubComment(issueNum)
      }
    },
    async createIssue(issueTitle) {

      console.log('createIssue', issueTitle);
      const { data, error } = await useLazyAsyncData('create', () => $fetch('/github-api/repos/JunjaK/nuxt3-blog-template/issues', {
        headers: {
          Authorization: 'Bearer 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',
          Accept: 'application/vnd.github+json'
        },
        method: 'POST',
        body: {
          title: issueTitle,
          body: `${issueTitle}\nWrite comment Freely`,
          assignees: ['JunjaK']
        }
      }))

      console.log(data.value, error.value);

      return data.value.number
    },
    async bindGithubComment(issueNum) {
      this.utterancesConfig = {
        repo: 'Junjak/nuxt3-blog-template',
        theme: "photon-dark",
        issueNumber: issueNum
      }

      this.$nextTick(() => {
        let utterances = document.createElement("script");
        utterances.async = true;
        utterances.setAttribute("src", "https://utteranc.es/client.js");
        utterances.setAttribute("repo", this.utterancesConfig.repo);
        utterances.setAttribute("issue-number", this.utterancesConfig.issueNumber);
        utterances.setAttribute("label", this.utterancesConfig.label);
        utterances.setAttribute("theme", this.utterancesConfig.theme);
        utterances.setAttribute("crossorigin", "anonymous");
        this.$refs.vueUtterances.appendChild(utterances);
        this.commentLoading = false
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.btn {
  text-transform: unset !important;

}
</style>