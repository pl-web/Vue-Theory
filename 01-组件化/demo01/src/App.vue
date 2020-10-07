<template>
  <div id="my-app">
    <!-- <button @click="handleClick">点击一下</button>
    <div class="box"></div>
    <h3></h3>
    <child @click="handleClick02"></child> -->
    --------------------------------------
    <!-- <Using></Using> -->
    <Index></Index>
  </div>
</template>

<script>
// import Child from "./Child01.vue"
// import Using from "./slot/Using.vue"
import Index from './form/Index.vue'
export default {
  name: 'App',
  provide() {
    return {
      foo: "foo"
    }
  },
  components: {
    // Child,
    // Using
    Index
  },
  methods: {
    handleClick() {
      console.log("this: ", this);
      console.log("this.$children", this.$children);
    },
    handleClick02() {
      console.log("来自父组件的点击事件");
    }
  }
}
</script>
