<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  body{
    width: 100%;
    height: 100%;
  }
  @import '@/assets/style/public-class.scss';
</style>
