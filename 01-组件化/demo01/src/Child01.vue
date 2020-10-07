<template>
  <div id="child-01">
    <button>孩子按钮</button>
    <h2 v-on="$listeners"></h2>
    <p>{{foo}}</p>
  </div>
</template>

<script>
export default {
  name: "Child",
  // 注入 -- 获取provide中的数据
  inject: ['foo'],
  methods:{
    listenerEvent() {
      console.log(this.$listeners)
    }
  }
}
</script>