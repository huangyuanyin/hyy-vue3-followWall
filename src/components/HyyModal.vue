<template>
  <transition name="modal">
    <div class="hyy-modal" v-if="isModal">
      <div class="hyy-modal-head">
        <p class="modal-name">{{ props.title }}</p>
        <span class="iconfont icon-guanbi" @click="closeModal"></span>
      </div>
      <div class="hyy-modal-main">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineEmits, onMounted } from 'vue'

const props = defineProps({
  title: {
    default: '标题'
  },
  isModal: {
    default: false
  }
})
const emit = defineEmits(['close'])

function closeModal() {
  emit('close')
}

onMounted(() => {})
props
</script>

<style lang="less" scoped>
.modal {
  &-enter {
    &-from {
      transform: translateX(360px);
    }
    &-active {
      transition: all 0.2s ease-out;
    }
    &-to {
      transform: translateX(0px);
    }
  }
  // 出场
  &-leave {
    &-from {
      transform: translateX(0px);
    }
    &-active {
      transition: all 0.2s ease-in;
    }
    &-to {
      transform: translateX(360px);
    }
  }
}
.hyy-modal {
  width: 360px;
  height: 100%;
  position: fixed;
  right: 0px;
  top: 52px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  .hyy-modal-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: @padding-20;
    box-sizing: border-box;
    .modal-name {
      font-size: @size-16;
      font-weight: 600;
      color: @gray-1;
    }
    .icon-guanbi {
      cursor: pointer;
      color: @gray-2;
      padding-left: 8px;
    }
  }
  .hyy-modal-main {
    height: 100%;
    overflow-y: auto;
    padding-bottom: 116px;
    box-sizing: border-box;
    overflow-x: auto;
    margin: 2px;
  }
  // .slot {
  //   height: 1200px;
  //   background: #eee;
  // }
  .hyy-modal-main::-webkit-scrollbar {
    /**滚动条整体样式 */
    width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
  }
  .hyy-modal-main::-webkit-scrollbar-thumb {
    /**滚动条里面小方块*/
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.2);
  }
  .hyy-modal-main::-webkit-scrollbar-track {
    /**滚动条里面轨道*/
    border-radius: 4px;
    background: rgba(0, 0, 0, 0);
  }
}
</style>
