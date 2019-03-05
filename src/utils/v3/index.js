/**
 * Created by xixue on 2018/12/22.
 */
import log from './v3.log.js'
import cookies from './v3.cookies.js'
import storage from './v3.storage.js'

let v3 = {
  storage,
  log,
  cookies
}

/**
 * @description 更新标题
 * @param {String} title 标题
 */
v3.title = function (titleText) {
  const processTitle = process.env.APP_TITLE || '松鼠AI智适应教育'
  window.document.title = `${processTitle}${titleText ? ` | ${titleText}` : ''}`
}

/**
 * @description 打开新页面
 * @param {String} url 地址
 */
v3.open = function (url) {
  var a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('target', '_blank')
  a.setAttribute('id', 'd2admin-menu-link')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(document.getElementById('d2admin-menu-link'))
}

v3.mathjax = function (isMathjaxConfig) {
  const initMathjaxConfig = () => {
    if (!window.MathJax) {
      return
    }
    window.MathJax.Hub.Config({
      showProcessingMessages: false, // 关闭js加载过程信息
      messageStyle: 'none', // 不显示信息
      jax: ['input/TeX', 'output/HTML-CSS'],
      tex2jax: {
        inlineMath: [['$', '$'], ['\\(', '\\)']], // 行内公式选择符
        displayMath: [['$$', '$$'], ['\\[', '\\]']], // 段内公式选择符
        skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'a'] // 避开某些标签
      },
      'HTML-CSS': {
        availableFonts: ['STIX', 'TeX'], // 可选字体
        showMathMenu: false // 关闭右击菜单显示
      }
    })
    isMathjaxConfig = true
  }
  if (isMathjaxConfig === false) { // 如果：没有配置MathJax
    initMathjaxConfig()
  }

  // 如果，不传入第三个参数，则渲染整个document
  // 因为使用的Vuejs，所以指明#app，以提高速度
  window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, document.getElementById('app')])
}
export default v3
