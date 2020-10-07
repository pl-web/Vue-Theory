<template>
  <div>
    <!-- model 数据必须绑定的 -->
    <Form :model="userInfo" :rules="ruleItems" ref="loginForm">
      <!-- label标签不是动态数据 -- 当然可以设置为动态的绑定内容 -->
      <FormItem label="用戶名" prop="username">
        <InputCpn v-model="userInfo.username" placeholder="请输入用户名"></InputCpn>
      </FormItem>
      <!-- password -->
      <FormItem label="密码" prop="password">
        <InputCpn type="password" v-model="userInfo.password"></InputCpn>
      </FormItem>
      <!-- button -->
      <FormItem>
        <button @click="login">Submit</button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import InputCpn from "./InputCpn.vue";
import FormItem from "./FormItem.vue";
import Form from './Form.vue'
export default {
  name: "Index",
  components: {
    InputCpn,
    FormItem,
    Form
  },
  data() {
    return {
      userInfo: {
        username: "Jack",
        password: "",
      },
      ruleItems: {
        username: [{ required: true, msg: "请输入您的用户名" }],
        password: [{ required: true, msg: "请输入密码" }],
      },
    };
  },
  methods: {
    // 请求登录按钮
    login() {
      this.$refs["loginForm"].validate(valid => {
        if(valid) {
          alert("submit success");
        } else {
          console.log("submit error, please again!");
          return false;
        }
      });
    }
  }
}
</script>
<style scoped>

</style>