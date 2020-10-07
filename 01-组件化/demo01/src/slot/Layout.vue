<template>
  <div id="layout">
    <!-- 头部 -->
    <div class="header">
      <slot name="header"></slot>
    </div>
    <!-- 中部 -->
    <div class="content">
      <slot></slot>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>