import Vue from 'vue'

function create (Component, Props) {
  const vm = new Vue({
    // render返回虚拟DOM
    // 挂载后将会渲染成为宿主，则真实DOM
    // $mount不指定宿主，则只会创建出DOM
    render: h => h(Component, {Props})
  }).$mount()

  // vm.$el可以获取真实DOM
  document.body.appendChild(vm.$el)

  // 返回return组件实例
  const one = vm.$children[0]

  one.remove = function () {
    document.body.removeChild(vm.$el)
    vm.$destory()
  }

  return one
}

export default create
