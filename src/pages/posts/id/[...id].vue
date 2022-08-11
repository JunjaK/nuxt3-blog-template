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
    <div id="gitalk-container"></div>
  </main>
</template>

<script>
import Gitalk from 'gitalk'


export default {
  name: 'ContentDocs',
  data() {
    return {
      doc: null,
      tags: [],
      created: null,
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
        headers: { Authorization: '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' },
        method: 'GET'
      }))

      if (error.value) return
      (data.value, this.doc);
      const postTitle = this.doc.title ?? (this.doc?.body?.children[0].children[0].value ?? '')
      const issueTitle = `${postTitle}_${this.doc.created}`
      (postTitle);
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
      ('create res', data, error);

      return 
    },
    async bindGithubComment(issueNum) {
      const gitalk = new Gitalk({
        clientID: 'e1e6a662858724bddf1c',
        clientSecret: '4db6fdcc5181be6e7aadaa04e3a3d747d9d76a44',
        repo: 'nuxt3-blog-template',      // The repository of store comments,
        owner: 'Junjak',
        admin: ['Junjak'],
        id: window.location.href,
        number: issueNum,
        distractionFreeMode: false  // Facebook-like distraction free mode
      })
      setTimeout(() => {
        gitalk.render('gitalk-container')
      }, 500);
    }
  },
}
</script>

<style lang="scss" scoped>
.btn {
  text-transform: unset !important;

}
</style>