<template>
  <router-view />
  <p class="ab">111</p>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
// @import url(./styles/commons.less);
@import './assets/fonts/icon/iconfont.css';
.ab {
  color: @primary-color;
  font-size: @size-12;
}
</style>
