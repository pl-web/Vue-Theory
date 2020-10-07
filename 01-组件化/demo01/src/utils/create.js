import Vue from 'vue'

// create函数
function create(Component, props) {
  // Vue.extend();
  // render()
  const vm = new Vue({
    // h为createElement函数，返回为VNode，是虚拟DOM
    render: h => h(Component, { props })
  }).$mount();
  // 挂载到body中
  // $el可以获取真实DOM
  document.body.appendChild(vm.$el);
  // 获取其中的$children
  const vm_child = vm.$children[0];
  return vm_child
}