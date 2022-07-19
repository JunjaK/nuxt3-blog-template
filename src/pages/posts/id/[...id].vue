<template>
  <main>
    <div>
      Specific Post
    </div>
   <ContentRenderer :value="data">
       <template #empty>
        <p>No content found.</p>
      </template>
    </ContentRenderer>
  </main>
</template>


<script setup>
const { path } = useRoute()
const [_, mdPath] = path.split('/id')
const { data } = await useAsyncData('ContentDoc', () => queryContent(mdPath).findOne())

</script>