<template>
  <div class="flex justify-evenly tabs">
    <a v-for="(tab) in tabState.tabList" :class="['tab','text-xl', isTabActive(tab.name)]" :key="tab.name"
      @click="clickNav(tab)">
      {{ tab.name }}
    </a>
  </div>
</template>


<script setup>
const tabState = reactive({
  tabList: [
    { name: 'Home', path: '/' },
    { name: 'Posts', path: '/posts' },
    { name: 'Tags', path: 'tags' },
    { name: 'About', path: '/about' }
  ],
  currentTabName: 'Home'
})

const isTabActive = computed(() => {
  return (tabName) => {
    return tabName === tabState.currentTabName ? 'tab-active' : ''
  }
})

const router = useRouter()

const clickNav = (tab) => {
  tabState.currentTabName = tab.name
  router.push(tab.path)
}

</script>