<template>
  <main class="h-full p-4">
    <div class="mb-4">
      Created: {{created}}
    </div>
    <article class="prose prose-stone grid grid-cols-1 content-between">
      <ContentRenderer :value="doc">
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </article>
  </main>
</template>

<script>
export default {
  name: 'ContentDocs',
  data() {
    return {
      doc: null,
      tags: null,
      created: null,
    }
  },
  async created() {
    const { path } = useRoute()

    const [_, mdPath] = path.split('/id')
    const data = await queryContent(mdPath).findOne()
    this.doc = data
    this.tags = data.tags
    this.created = data.created
  },
}


</script>