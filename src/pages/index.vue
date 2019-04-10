<template>
  <div class="v3-container">
    <div class="v3-course-boot animated bounceIn">
      <div class="v3-course-title animated typing delay-1s">
        初中英语
      </div>
      <div class="v3-course-msg animated typing delay-2s">
        欢迎来到英语星球；您即将开启一段奇妙的旅程；请做好准备！
      </div>
      <div class="v3-course-inter animated" v-show="buttonShow" @click="startStudy">
        开始测试
      </div>
    </div>
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
      buttonShow:false
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
  @import '@/assets/style/theme/register.scss';
</style>
