<template>
  <div class="flex justify-evenly tabs  sticky top-0 bg-base-400">
    <a v-for="(tab) in tabState.tabList" :class="['tab', 'text-xl', isTabActive(tab.name)]" :key="tab.name"
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
    { name: 'Tags', path: '/tags' },
    { name: 'About', path: '/about' }
  ],
  currentTabName: null,
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

findCurrentTab(router.currentRoute.value)
watch(router.currentRoute, (cur, old) => {
  findCurrentTab(cur)
})

function findCurrentTab(target) {
  const currentTab = tabState.tabList.find(e => {
    let [b1, path] = e.path.split('/')
    const [b2, curPath] = target.path.split('/')
    return path === curPath
  })

  tabState.currentTabName = currentTab?.name
}


</script>