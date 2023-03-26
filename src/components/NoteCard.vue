<template>
  <div class="hyy-node-card" :style="{ width: props.width, background: cardColor[card.imgurl] }">
    <div class="top">
      <p class="time">{{ dateOne(card.moment) }}</p>
      <p class="label">{{ label[card.type][card.label] }}</p>
    </div>
    <p class="message">
      {{ card.message }}
    </p>
    <div class="foot">
      <div class="foot-left">
        <div class="icon">
          <span class="iconfont icon-aixin1"></span>
          <span class="value">{{ card.like }}</span>
        </div>
        <div class="icon">
          <span class="iconfont icon-liuyan"></span>
          <span class="value">{{ card.comment }}</span>
        </div>
      </div>
      <div class="name">{{ card.name }}</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { label, cardColor } from '@/utils/data'
import { dateOne } from '@/utils/hyyUtil.js'

const props = defineProps({
  width: {
    default: '100%'
  },
  note: {
    default: {}
  }
})

const card = computed(() => {
  return props.note
})

onMounted(() => {})
</script>

<style lang="less" scoped>
.hyy-node-card {
  height: 240px;
  padding: 10px 20px;
  box-sizing: border-box;
  position: relative;
  .top {
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
    p {
      font-size: @size-12;
      color: @gray-3;
    }
  }
  .message {
    height: 140px;
    font-family: HanziPenSC-W3;
    font-size: 15px;
    color: @gray-1;
    cursor: pointer;
  }
  .foot {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 16px;
    left: 0;
    padding: 0 20px;
    box-sizing: border-box;
    width: 100%;
    .foot-left {
      display: flex;
      .value {
        font-size: @size-12;
        color: @gray-3;
        line-height: 16px;
        padding: @padding-4;
      }
      .iconfont {
        font-size: 16px;
        color: @gray-3;
      }
      .icon {
        padding-right: @padding-8;
        display: flex;
        align-items: center;
      }
      .icon-aixin1 {
        cursor: pointer;
        transition: @tr;
        &:hover {
          color: @like;
        }
      }
    }
  }
  .name {
    font-family: HanziPenSC-W3;
    font-size: 17px;
    color: @gray-1;
  }
}
</style>
