<template>
  <div class="card-detail">
    <div class="top-bt">
      <p class="revoke">联系墙主撕掉该标签</p>
      <p class="report">举报</p>
    </div>
    <NoteCard :note="props.card"></NoteCard>
    <div class="form">
      <textarea class="message" placeholder="请输入..."></textarea>
      <div class="bt">
        <input type="text" class="name" placeholder="签名" />
        <HyyButton>确定</HyyButton>
      </div>
    </div>
    <p class="title">评论{{ card.comment }}</p>
    <div class="commont">
      <div class="commont-li" v-for="(e, index) in commentList" :key="'commentList' + index">
        <div class="user-head" :style="{ backgroundImage: portrait[e.imgurl] }"></div>
        <div class="comm-m">
          <div class="m-top">
            <p class="name">{{ e.name }}</p>
            <p class="time">{{ dateOne(e.moment) }}</p>
          </div>
          <div class="mm">{{ e.message }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NoteCard from './NoteCard.vue'
import HyyButton from './HyyButton.vue'
import { comment } from '../../mock/index'
import { portrait } from '@/utils/data'
import { dateOne } from '@/utils/hyyUtil.js'

const props = defineProps({
  card: {
    default: () => {}
  }
})

const commentList = ref(comment.data)
</script>

<style lang="less" scoped>
.card-detail {
  position: relative;
  padding: 0 @padding-20;
  .top-bt {
    position: fixed;
    top: 0px;
    left: 0px;
    padding: @padding-20;
    display: flex;
    .revoke {
      color: @primary-color;
      cursor: pointer;
      padding-right: 30px;
      font-size: @size-16;
    }
    .report {
      color: @warning-color;
      cursor: pointer;
      font-size: @size-16;
    }
  }
  .form {
    .message {
      background: none;
      width: 100%;
      height: 56px;
      border: 1px solid rgba(148, 148, 148, 1);
      padding: @padding-8;
      box-sizing: border-box;
      resize: none;
      margin-top: @padding-20;
    }
    .bt {
      display: flex;
      justify-content: space-between;
      padding-top: 6px;
      .name {
        width: 200px;
        border: 1px solid rgba(148, 148, 148, 1);
        line-height: 20px;
        padding: 7px;
        box-sizing: border-box;
      }
    }
  }
  .title {
    padding-top: 30px;
    font-weight: 600;
    padding-bottom: 20px;
  }
  .commont-li {
    display: flex;
    padding-bottom: 30px;
    .user-head {
      flex: none;
      width: 28px;
      height: 28px;
      border-radius: 20px;
      overflow: hidden;
      // background-image: linear-gradient(180deg, #7be7ff 2%, #1e85e2 100%);
    }
    .comm-m {
      padding-left: @padding-8;
    }
    .m-top {
      display: flex;
      align-items: center;
      .name {
        font-weight: 600;
      }
      .time {
        color: @gray-3;
        font-size: @size-12;
        padding: @padding-4;
      }
    }
    .mm {
      padding-top: @padding-4;
    }
  }
}
</style>
