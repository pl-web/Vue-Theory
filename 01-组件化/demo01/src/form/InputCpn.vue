// 输入框组件
<template>
  <div id="input-cpn">
    <input :type="type" :value="value" @input="onInput" v-bind="$attrs">
  </div>
</template>
<script>
export default {
  name: "InputCpn",
  inheritAttrs: false, // 不再继承来自之外的东西
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      required: false
    }
  },
  methods: {
    onInput(e) {
      // 向外层派发出一个事件
      this.$emit('input', e.target.value);
      // 如果输入框的值发生变化了，那么将通知执行
      this.$parent.$emit("validate");
    }
  }
}
</script>
<style scoped>

</style>