<template>
  <div class="v3-container">
    <transition name="bounceIn">
      <div class="v3-course-boot" v-show="animation">
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'welcome',
  components: {
  },
  data () {
    return {
      msg: '',
      animation: false
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
    let vm = this
    vm.animation = false
    setTimeout(function () {
      vm.animation = true
    }, 1000)
  }
}
</script>
<style lang="scss">
  // 注册主题
  @import '@/assets/style/theme/register.scss';
</style>
