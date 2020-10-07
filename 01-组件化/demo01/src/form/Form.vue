// 该组件的功能：
// 1. 实现表单Form组件
// 2. 能够获取数据
// 3. 能够进行自动地校验
// 设计原则：① 高内聚 ② 低耦合
<template>
  <div id="test">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "IndexTest",
  provide() {
    return {
      form: this
    }
  },
  props: {
    // 表单接受到的数据信息 -- 必填项
    model: {
      type: Object,
      required: true,
    },
    // 表单接受到的校验信息 -- 选择项
    rules: {
      type: Object,
    }
  },
  methods: {
    validate(callback) {
      // 会去执行给每一个表单项的校验
      // map方法得到一个数组
      const exeTasks = this.$children.filter(item => item.prop).map(item => item.startValidate());
      Promise.all(exeTasks).then(() => callback(true)).catch(() => callback(false));
    }
  }
};
</script>

<style scoped>
</style>