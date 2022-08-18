<template>
  <main class="h-full p-4 detail-content flex flex-col justify-between" style="">
    <div>
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
    </div>
    <div>
      <div class="divider"></div>
      <div class="comment-container">
        <div ref="vueUtterances">
        </div>
        <div v-show="commentLoading" class="comment-loading-div">
          <div class="animate-pulse flex space-x-4 items-center justify-center align-middle" style="height: 267px">
            <div class="flex-1 space-y-4" style="max-width: 752px">
              <div class="h-6 bg-zinc-700 rounded"></div>
              <div class="h-6 bg-zinc-700 rounded"></div>
              <div class="h-6 bg-zinc-700 rounded"></div>
              <div class="h-6 bg-zinc-700 rounded"></div>
              <div class="h-6 bg-zinc-700 rounded"></div>
            </div>
          </div>
        </div>
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
      githubToken: null,
    }
  },
  async created() {
    const {path} = useRoute()

    const [_, mdPath] = path.split('/id')
    const data = await queryContent(mdPath).findOne()
    this.doc = data
    this.tags = data.tags.split(',')
    this.created = data.created
    this.githubToken = useRuntimeConfig().githubToken

    await this.checkIssueExsit()
  },
  methods: {
    clickTag(tag) {
      this.$router.push(`/tags/id/${tag}`)
    },
    async checkIssueExsit() {
      const {
        data,
        error
      } = await useLazyAsyncData('count', () => $fetch('https://api.github.com/repos/JunjaK/nuxt3-blog-template/issues', {
        method: 'GET'
      }))

      if (error.value) return
      const postTitle = this.doc.title ?? (this.doc?.body?.children[0].children[0].value ?? '')
      const issueTitle = `${postTitle}_${this.doc.created}`
      const checkIssue = data.value.find((e) => e.title === issueTitle)
      if (checkIssue) {
        const issueNum = checkIssue.number
        this.bindGithubComment(issueNum)
      } else {
        const issueNum = await this.createIssue(issueTitle)
        this.bindGithubComment(issueNum)
      }
    },
    async createIssue(issueTitle) {

      console.log('createIssue', issueTitle);
      const {
        data,
        error
      } = await useLazyAsyncData('create', () => $fetch('https://api.github.com/repos/JunjaK/nuxt3-blog-template/issues', {
        headers: {
          Authorization: `Bearer ${this.githubToken}`,
          Accept: 'application/vnd.github+json'
        },
        method: 'POST',
        body: {
          title: issueTitle,
          body: `${issueTitle}\nWrite comment Freely`,
          assignees: ['JunjaK']
        }
      }))

      return data.value.number
    },
    bindGithubComment(issueNum) {
      this.utterancesConfig = {
        repo: 'Junjak/nuxt3-blog-template',
        theme: "photon-dark",
        issueNumber: issueNum
      }

      this.$nextTick(() => {
        let utterances = document.createElement("script");
        this.$refs.vueUtterances.appendChild(utterances);
        utterances.async = true;
        utterances.onload = () => {
          setTimeout(() => {
            this.commentLoading = false
          }, 1000)
        }
        utterances.src = 'https://utteranc.es/client.js'
        utterances.setAttribute("repo", this.utterancesConfig.repo);
        utterances.setAttribute("issue-number", this.utterancesConfig.issueNumber);
        utterances.setAttribute("label", this.utterancesConfig.label);
        utterances.setAttribute("theme", this.utterancesConfig.theme);
        utterances.setAttribute("crossorigin", "anonymous");
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.comment-loading-div {
  position: relative;
  z-index: 99;
}
</style>
