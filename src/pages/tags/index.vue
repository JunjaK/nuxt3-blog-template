<template>
  <div>
    <div class="pt-5 pb-2">
      <h1 class="text-center">Tags</h1>
    </div>
    <div class="flex justify-center mb-5">
      <div class="divider w-60"></div>
    </div>

    <div class="tags-wrapper">
      <div class="tags-container text-center">
        <button v-for="(value, key) in state.tagObj" class="btn btn-sm mx-1" @click="clickTag(key)">
          <span class="text-primary text-lg">{{ key }}</span>
          <span class="mx-2 text-gray-400">|</span>
          <span class="text-md">{{ value }}</span>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
const { data } = await useAsyncData('ContentDoc', () => queryContent('').find())

const router = useRouter()
const state = reactive({
  tagObj: {}
})

data?.value.forEach(e => {
  const tagSplit = e.tags.split(',')
  tagSplit.forEach(tag => {
    if (state.tagObj[tag] == null) {
      state.tagObj[tag] = 0
    }
    state.tagObj[tag] += 1
  })
})



function clickTag(tag) {
  router.push(`tags/id/${tag}`)
}

</script>