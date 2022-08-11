<template>
  <div class="mb-12">
    <div class="mb-6 block">
      <!-- Todo Search with algolia -->
      <input v-model="typedText" type="text" placeholder="Type to Search" class="input w-full"
        @keyup.enter="searchContent" />
    </div>

    <div class="grid grid-cols-1 gap-8 px-2 sm:px-12">
      <ListItem v-for="(item, idx) in listData" :key="idx" :tags="item.tags" :created="item.created" :desc="item.desc"
        :image="item.image" :title="item.title" :path="item.path" :loading="loading" />
    </div>
  </div>
</template>


<script>
export default {
  name: 'ListItem',
  data() {
    return {
      listData: null,
      typedText: null,
      loading: false,
    }
  },
  async created() {
    this.loading = true
    const contentQuery = await queryContent('').find()
    this.listData = this.convertData(contentQuery)
    setTimeout(() => {
      this.loading = false
    }, 300)
  },
  methods: {
    convertData(data) {
      const list = []
      data.forEach(elem => {
        const postData = {}
        if (elem?.tags) {
          postData.tags = elem.tags.split(',')
        }
        postData.title = elem.title ?? (elem?.body?.children[0].children[0].value ?? '')
        postData.desc = elem.desc
        postData.image = elem.image
        postData.created = elem.created
        postData.path = elem._path

        list.push(postData)
      })

      return list
    },
    searchContent() {
      ('todo Search', this.typedText);
    }
  },
}


</script>

<style lang="scss" scoped>
</style>