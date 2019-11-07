<template>
    <div class="demo-contain">
      <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%" id="yx-question-dialog"
        :before-close="handleClose" @opened="opened">
        <span>$\frac{a_i}{1+x}$</span>
      </el-dialog>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    mounted: function() {
      this.$nextTick(() => {

        MathJax.Hub.Queue(['Typeset', MathJax.Hub, document.getElementById('yx-question-dialog')])
      })
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      opened(done) {
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, document.getElementById('yx-question-dialog')])
      }
    }
  };
</script>

<style scoped>

</style>
