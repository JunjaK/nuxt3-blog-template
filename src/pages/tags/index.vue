<template>
  <div>
    <div v-for="(value, key) in tagObj">
      {{ `${key}: ${value}` }}
    </div>
  </div>
</template>

<script setup>
const { data } = await useAsyncData('ContentDoc', () => queryContent('').find())
const tagObj = {}

data?.value.forEach(e => {
  const tagSplit = e.tags.split(',')
  tagSplit.forEach(tag => {
    if (tagObj[tag] == null) {
      tagObj[tag] = 0
    }
    tagObj[tag] += 1
  })
})

</script>