<template>
  <div class="lg:container lg:mx-auto md:container md:mx-auto font-nanum-gothic">
    <nav-bar />
      <base-header class="m-2 mb-6"/>
      <slot name="header"/>
    <div class="my-2 p-4 layout-content bg-base-300 bg-opacity-80 rounded-2xl">
      <slot />
    </div>
    <base-footer />

  </div>
</template>

<style lang="scss" scoped>
.layout-content { 
  min-height: calc(100vh - 252px);
}
</style>