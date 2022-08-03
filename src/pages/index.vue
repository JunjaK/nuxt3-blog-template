<template>
<div>

  <div style="height: 200px">
    Main
    <div class="i-tabler-point"></div>
    <div class="i-tabler-alert-circle"></div>
    <button class="btn btn-primary">
      test
    </button>
  </div>
  <div style="height: 200px">
    Main
    <button class="btn btn-primary">
      test
    </button>
  </div>
  <div style="height: 200px">
    Main
    <button class="btn btn-primary">
      test
    </button>
  </div>
  <div style="height: 200px">
    Main
    <button class="btn btn-primary">
      test
    </button>
  </div>
</div>
</template>


<script>
export default {
  name: 'MainPage',
  layout: 'about',
  created(){
    console.log('test');
  }
}

</script>