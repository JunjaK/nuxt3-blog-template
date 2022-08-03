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
    <article class="prose prose-stone grid grid-cols-1 content-between">
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
const gitalk = new Gitalk({
  clientID: 'e1e6a662858724bddf1c',
  clientSecret: '4db6fdcc5181be6e7aadaa04e3a3d747d9d76a44',
  repo: 'nuxt3-blog-template',      // The repository of store comments,
  owner: 'Junjak',
  admin: ['Junjak'],
  id: 'jeio3i424djfojsdifweeejriewj3434',      // Ensure uniqueness and length less than 50
  distractionFreeMode: false  // Facebook-like distraction free mode
})


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
  },
  mounted() {
    setTimeout(() => {
      gitalk.render('gitalk-container')
    }, 200);
  },
  methods: {
    clickTag(tag) {
      this.$router.push(`/tags/id/${tag}`)
    }
  },
}
</script>

<style lang="scss" scoped>
.btn {
  text-transform: unset !important;

}
</style>