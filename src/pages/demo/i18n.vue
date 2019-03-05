<template>
  <div class="hello">
    <p>{{label}}</p>
    <el-button type="primary" @click="switchLang">切换</el-button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'demo-i18n-index',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState('icbc/i18n/', [
      'lang'
    ]),
    label () {
      return this.$t('message.hello')
    }
  },
  methods: {
    switchLang () {
      console.log(this)
      let lang = ''
      if (this.lang === 'en') {
        lang = 'cn'
      } else {
        lang = 'en'
      }
      this.$i18n.locale = lang
      this.$store.dispatch('icbc/i18n/set', lang)
    }
  }
}
</script>
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
