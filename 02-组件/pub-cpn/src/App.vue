<template>
  <div id="app">
    <button @click="popInfoBox">弹出信息</button>
    <Test></Test>
  </div>
</template>

<script>
import Test from './components/Test'
export default {
  name: 'App',
  components: {
    Test
  },
  methods: {
    popInfoBox () {
      const _notice = this.$create(Test, {
        message: '这是你的自定义内容',
        duration: 2000
      })
      _notice.toShow()
    }
  }
}
</script>
