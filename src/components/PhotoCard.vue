<template>
  <div class="photo-card">
    <img :src="'../../static/' + props.photo.imgurl + '.png'" alt="" class="photo-img" />
    <div class="photo-bg"></div>
    <div class="photo-like">
      <span class="iconfont icon-aixin1"></span>
      <div class="like-data">{{ props.photo.like }}</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
// import { label, cardColor } from '@/utils/data'

const props = defineProps({
  photo: {
    default: {}
  }
})

// const card = computed(() => {
//   return props.photo
// })

onMounted(() => {})
</script>

<style lang="less" scoped>
.photo-card {
  position: relative;
  .photo-img {
    width: 100%;
  }
  .photo-bg {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: @tr;
  }
  .photo-like {
    position: absolute;
    left: @padding-8;
    top: @padding-8;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    height: 28px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    backdrop-filter: blur(10px);
    opacity: 0;
    transition: @tr;
    cursor: pointer;
    .icon-aixin1 {
      color: @gray-3;
      padding-right: @padding-4;
    }
    .like-data {
      color: @gray-1;
    }
  }
  &:hover {
    .photo-bg {
      opacity: 1;
    }
    .photo-like {
      opacity: 1;
    }
  }
}
</style>
