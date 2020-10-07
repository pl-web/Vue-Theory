<template>
  <div class="using-layout">
    <Layout>
      <!-- 具名插槽 -->
      <template v-slot:header>头部布局</template>
      <!-- 匿名插槽 -->
      <template>中部布局</template>
      <!-- 具名插槽 -->
      <template v-slot:footer>底部布局</template>
    </Layout>
  </div>
</template>
<script>
import Layout from './Layout.vue'
export default {
  name: "Using",
  components: {
    Layout
  }
}
</script>