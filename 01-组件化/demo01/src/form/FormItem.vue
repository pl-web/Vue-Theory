<template>
  <div id="item">
    <!-- label -->
    <label v-if="label">{{label}}</label>
    <!-- slot using in a specific requirement -->
    <slot></slot>
    <!-- check info -->
    <p v-if="errorInfo">{{errorInfo}}</p>
    <!-- rules -->
    <p>{{form.rules}}</p>
  </div>
</template>

<script>
import Validate_form from 'async-validator'
export default {
  name: "FormItem",
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    // 用于定位该标签属于哪一类型
    prop: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      errorInfo: ""
    }
  },
  mounted() {
    this.$on("validate", () => {
      this.startValidate();
    })
  },
  methods: {
    // 开始执行校验的函数
    startValidate() {
      // 要怎样去执行校验呢？
      // console.log(this.form.rules);
      // 获取当前标签的校验规则
      // console.log(this.form.rules[this.prop]);
      const curRule = this.form.rules[this.prop];
      // 获取当前标签的当前值
      // console.log(this.form.model[this.prop]);
      const curValue = this.form.model[this.prop];
      // 创建校验规则的描述对象
      const description = {[this.prop]: curRule};
      // 引入async-validator
      const validator_form = new Validate_form(description);
      // 执行校验
      return validator_form.validate({[this.prop]: curValue}, (errors) => {
        if(errors) {
          this.errorInfo = errors[0].message;
        } else {
          this.errorInfo = '';
        }
      });
    }
  }
}
</script>

<style scoped>

</style>