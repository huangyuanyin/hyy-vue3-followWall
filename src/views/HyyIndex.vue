<template>
  <div class="wall-index">
    <TorBar></TorBar>
    <video src="@/assets/images/qm1.mp4" autoplay="autoplay" muted="nuted" loop="loop" class="bg-video"></video>
    <router-view></router-view>
    <FootBar></FootBar>
  </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted } from 'vue'
import TorBar from '@/components/TopBar.vue'
import FootBar from '@/components/FootBar.vue'

onMounted(() => {
  axios
    .post('http://182.61.20.123:3001/singin/match', {
      data: 'aaa',
      pwd: 'bbb'
    })
    .then((res) => {
      console.log(res)
    })
})
</script>

<style lang="less" scoped>
.wall-index {
  .bg-video {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    height: 800px;
  }
}
</style>
