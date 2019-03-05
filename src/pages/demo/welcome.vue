<template>
  <div class="v3-container">
    <div v-html="msg"></div>
    <h2>calculate</h2>
    <!--<sum-function :num1="num1" :num2="num2" v-on:getSumFromChild="receiveChildSum"></sum-function>-->

    <!--<p>从子组件获取到的值：{{sumFromChild}}</p>-->
  </div>
</template>
<script>
export default {
  name: 'demo-welcome',
  components: {
  },
  data () {
    return {
      msg: '<p>\\({\\log _a}N = \\frac{{{{\\log }_m}N}}{{{{\\log }_m}a}}\\) （a＞0，a≠1，m＞0，m ≠1，N＞0），  ①\\({\\log _a}b \\cdot {\\log _b}a\\)=___1___.②\\({\\log _{{a^m}}}{b^n}\\)=___2___\\({\\log _a}b\\)．\\(>>>>><<<<<<<\\)</p><font size="8">99999</font>'
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
    window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, document.getElementById('app')])
  }
}
</script>
<style lang="scss">
  // 注册主题
  @import '@/assets/style/theme/register.scss';
</style>
