<template>
  <div class="tor-bar">
    <div class="logo">
      <img src="@/assets/images/yksg.svg" alt="" class="logo-img" />
      <p class="logo-name">随欲</p>
    </div>
    <div class="menu">
      <HyyButton :nom="id == 0 ? 'cprimary' : 'csecondary'" class="menu-message" @click="changeWall(0)">留言墙</HyyButton>
      <HyyButton :nom="id == 1 ? 'cprimary' : 'csecondary'" class="menu-photo" @click="changeWall(1)">照片墙</HyyButton>
    </div>
    <div class="user">
      <div class="user-head"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import HyyButton from './HyyButton.vue'

const route = useRoute()
const router = useRouter()

const id = computed(() => {
  return route.query.id
})

// 切换
const changeWall = (e) => {
  router.push({
    query: {
      id: e
    }
  })
}
</script>

<style lang="less" scoped>
.tor-bar {
  width: 100%;
  height: 52px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0%;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
  .logo {
    display: flex;
    align-items: center;
    width: 200px;
    .logo-img {
      width: 40px;
      height: 40px;
    }
    .logo-name {
      font-size: 20px;
      font-weight: 600;
      color: @gray-1;
      padding-left: 10px;
    }
  }
  .menu {
    .menu-message {
      margin-right: 24px;
    }
  }
  .user {
    width: 200px;
    .user-head {
      float: right;
      border-radius: 50%;
      height: 36px;
      width: 36px;
      background-image: linear-gradient(180deg, #7be7ff 2%, #1e85e2 100%);
    }
  }
}
</style>
