<template>
  <div v-if="loading">
    <div class=" border-gray-700 border-2 shadow rounded-md p-4 w-full item-container">
      <div class="animate-pulse flex space-x-4 items-center">
        <div class="rounded-md bg-gray-700 h-18 w-36"></div>
        <div class="flex-1 space-y-3 py-1">
          <div class="h-2 bg-gray-700 rounded"></div>
          <div class="">
            <div class="grid grid-cols-6 gap-2">
              <div class="h-2 bg-gray-700 rounded"></div>
              <div class="h-2 bg-gray-700 rounded"></div>
              <div class="col-span-4"></div>
            </div>
            <div class="h-2 mt-4 mb-2 bg-gray-700 rounded"></div>
            <div class="h-2 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-start gap-4 item-container">
    <!-- Image -->
    <div v-if="image != null" class="cursor-pointer" @click="movePost(path)">
      <nuxt-img fit="cover" :src="image" height="110" width="160" />
    </div>
    <div v-else class="flex justify-center items-center cursor-pointer" style="width: 160px" @click="movePost(path)">
      <div class="i-tabler-photo text-4xl text-gray-400" />
    </div>

    <!-- Contents -->
    <div>
      <!-- Title -->
      <h2 class="text-2xl">
        <nuxt-link :to="postLink(path)" class="link link-hover">
          {{ title }}
        </nuxt-link>
      </h2>

      <!-- Tags -->
      <div class="flex justify-start gap-2">
        <nuxt-link v-for="(tag, idx) in tags" :key="idx" :to="tagLink(tag)" class="link link-primary link-hover">
          {{ tag }}
        </nuxt-link>
      </div>

      <!-- Desc -->
      <div class="mt-3 flex items-center" style="height: 40px;">
        <p class="font-light text-gray-400 cursor-pointer" @click="movePost(path)">
          {{ desc }}
        </p>
      </div>
    </div>
  </div>
</template>


<script setup>

defineProps({
  title: String,
  image: String,
  desc: String,
  tags: Array,
  created: String,
  path: String,
  loading: Boolean
})

const router = useRouter()

const tagLink = computed(() => {
  return (tag) => `/tags/id/${tag}`
})

const postLink = computed(() => {
  return (path) => `/posts/id${path}`
})

const movePost = (path) => {
  console.log(postLink);
  router.push(postLink.value(path))
}

</script>

<style lang="scss" scoped>
.item-container {
  height: 110px;
}
</style>