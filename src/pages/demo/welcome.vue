<template>
  <div class="v3-container">
    <div v-katex="{ expression: '<p>\\frac{a_i}{1+x}了是否解决</p>', options: { throwOnError: false }}"></div>
  </div>
</template>
<script>
export default {
  name: 'demo-welcome',
  components: {
  },
  data () {
    return {
      msg: ''
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style lang="scss">
  // 注册主题
  /*@import '@/assets/style/theme/register.scss';*/
</style>
