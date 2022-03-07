生命周期
setup
beforeCreate
created
beforeMount
mounted
beforeUpdate
updated
beforeUnmount
unmounted

<!-- 是不是自定义元素 -->

isCustomElement

<!-- 自定义选项合并 -->

app.config.optionMergeStrategies.hello = (parent, child, vm) => {
return `Hello, ${child}`
}

app.mixin({
hello: 'Vue'
})

// 'Hello, Vue

<!-- performance -->

设置为 true 以在浏览器开发工具的 performance/timeline 面板中启用对组件初始化、编译、渲染和更新的性能追踪。

<!-- useCssModule -->

允许在 setup 的单文件组件函数中访问 CSS 模块

<script>
import { h, useCssModule } from 'vue'
export default {
  setup() {
    const style = useCssModule()
    return () =>
      h(
        'div',
        {
          class: style.success
        },
        'Task complete!'
      )
  }
}
</script>
<style module>
.success {
  color: #090;
}
</style>
