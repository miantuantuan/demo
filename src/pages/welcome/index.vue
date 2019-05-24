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
    startStudy () {
      this.$router.replace({name: 'study-video'})
    }
  },
  mounted () {
    let vm = this
    setTimeout(function () {
      vm.buttonShow = true
    }, 3000)
    var re = /</g;
    var str = "John<Smi<<<<<th";
    var newstr = str.replace(/</g, "< ");
    console.log(newstr);
  }
}
</script>
<style lang="scss">

</style>
