<template>
  <transition name="view">
    <div class="hyy-viewer" v-if="props.isView">
      <div class="bg"></div>
      <div class="viewer-photo">
        <img :src="'../../static/' + props.photos[props.nowNumber] + '.png'" alt="" />
      </div>
      <div class="switch sw-left" @click="changeNumber(0)" v-show="props.nowNumber > 0">
        <span class="iconfont icon-xiangzuo"></span>
      </div>
      <div class="switch sw-right" @click="changeNumber(1)" v-show="props.nowNumber < props.photos.length - 1">
        <span class="iconfont icon-xiangyou"></span>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineEmits } from 'vue'

const props = defineProps({
  photos: {
    default: () => []
  },
  nowNumber: {
    type: Number,
    default: 0
  },
  isView: {
    default: false
  }
})
const emit = defineEmits(['viewSwitch'])

const changeNumber = (e) => {
  emit('viewSwitch', e)
}
</script>

<style lang="less" scoped>
.view {
  &-enter {
    &-from {
      opacity: 0;
    }
    &-active {
      transition: all 0.2s ease-out;
    }
    &-to {
      opacity: 1;
    }
  }
  // 出场
  &-leave {
    &-from {
      opacity: 1;
    }
    &-active {
      transition: all 0.2s ease-in;
    }
    &-to {
      opacity: 0;
    }
  }
}
.hyy-viewer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(225, 225, 225, 0.9);
    backdrop-filter: blur(20px);
    height: 100%;
    width: 100%;
  }
  .viewer-photo {
    position: absolute;
    padding: 82px 454px 0 96px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    display: flex;
    // align-items: center;
    justify-content: center;
    img {
      max-width: 100%;
    }
  }
  .switch {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: @gray-3;
    color: @gray-10;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    transition: @tr;
    cursor: pointer;
    .iconfont {
      font-size: 24px;
    }
    &:hover {
      opacity: 1;
    }
  }
  .sw-left {
    left: 20px;
  }
  .sw-right {
    right: 380px;
  }
}
</style>
