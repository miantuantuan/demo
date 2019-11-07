<template>
  <el-select v-model="value" placeholder="请选择"  @change="currentSel">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.value"
      :value="item.value">
    </el-option>
  </el-select>
</template>
<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    method: {
      currentSel(selVal) {
               this.code = selVal.value;
               this.name = selVal.label;
               console.log("选择的name为：" + this.name, "选择的code为:" + this.code);
               console.log(selVal);
      }
    }
  }
</script>
<style lang="scss">
</style>
