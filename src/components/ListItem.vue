<template>
  <div class="flex justify-start gap-4 item-container">
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
      <div class="mt-4">
        <p class="font-light text-gray-400 cursor-pointer" 
        @click="movePost(path)"
        >
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
  path: String
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