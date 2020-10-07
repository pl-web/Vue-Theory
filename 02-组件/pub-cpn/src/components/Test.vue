<template>
  <div id="notice-box" v-if="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'test',
  props: {
    message: {
      type: String,
      default: '弹出框信息'
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    toShow () {
      this.isShow = true
      setTimeout(() => {
        this.toHide()
      }, this.duration)
    },
    toHide () {
      this.isShow = false
      this.remove()
    }
  }
}
</script>

<style scoped>
#notice-box {
  width: 100px;
  height: 30px;
  background-color: #1aa;
}
</style>
