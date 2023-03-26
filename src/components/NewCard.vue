<template>
  <div class="new-card">
    <div class="colors">
      <p
        class="color-li"
        v-for="(e, index) in cardColor1"
        :key="'cardColor' + index"
        :style="{ background: e }"
        :class="{ colorSelected: index == colorSelected }"
        @click="changeColor(index)"
      ></p>
    </div>
    <div class="card-main" :style="{ background: cardColor[colorSelected] }">
      <textarea placeholder="留言" class="message" maxlength="96" v-model="message"></textarea>
      <input type="text" placeholder="签名" class="name" v-model="name" />
    </div>
    <div class="lables">
      <p class="title">选择标签</p>
      <div class="label">
        <p v-for="(e, index) in label[props.id]" :key="index" class="label-li" :class="{ labelSelected: index === labelSelected }" @click="changeLabel(index)">{{ e }}</p>
      </div>
    </div>
    <div>
      <div class="title">免责声明</div>
      <p class="mzsm">
        随欲是本人独自开发的，为便于与用户交流的留言平台。请不要利用此平台服务制作、复制、发布、传播以下信息：
        <br />
        1. 反对宪法所确定的基本原则的；
        <br />
        2. 危害国家统一、主权和领土完整的；
        <br />
        3. 泄露国家秘密、危害国家安全、泄露国家机密，颠覆国家政权，破坏国家统一的；
        <br />
        4. 损害国家荣誉和利益的；
        <br />
        5. 煽动民族仇恨、民族歧视，破坏民族团结的；
        <br />
        6. 破坏国家宗教政策，宣扬邪教和封建迷信的；
        <br />
        7. 散布谣言，扰乱社会秩序，破坏社会稳定的；
        <br />
        8. 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；
        <br />
        9. 侮辱或者诽谤他人，侵害他人合法权益的；
        <br />
        10. 含有法律、行政法规禁止的其他内容的信息。
      </p>
    </div>
    <div class="footbt">
      <HyyButton size="max" nom="secondary" @click="closeModal(0)">丢弃</HyyButton>
      <HyyButton size="max" class="submit">确定</HyyButton>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue'
import { cardColor, cardColor1, label } from '@/utils/data'
import HyyButton from './HyyButton.vue'

const props = defineProps({
  // 当前在留言墙或照片墙
  id: {
    default: 0
  }
})
const emit = defineEmits(['closeModal'])

const colorSelected = ref(0) // 当前选择颜色
const labelSelected = ref(0) // 当前选择标签
const message = ref('') // 留言信息
const name = ref('') // 签名

const changeColor = (e) => {
  colorSelected.value = e
}

const changeLabel = (e) => {
  labelSelected.value = e
}

// 关闭窗口
const closeModal = (data) => {
  emit('addClose', data)
}
</script>

<style lang="less" scoped>
.new-card {
  padding: 0 @padding-20 120px;
  position: relative;
  .colors {
    padding-bottom: @padding-12;
    display: flex;
    align-items: center;
    .color-li {
      width: 24px;
      height: 24px;
      margin-right: @padding-8;
      cursor: pointer;
    }

    .colorSelected {
      border: 1px solid @primary-color;
    }
  }
  .card-main {
    height: 240px;
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    transition: @tr;
    .message {
      border: none;
      resize: none;
      background: none;
      padding: @padding-8;
      box-sizing: border-box;
      height: 172px;
      width: 100%;
      font-family: HanziPenSC-W3;
      font-size: 15px;
    }
    .name {
      width: 100%;
      line-height: 20px;
      border: #fff 1px solid;
      background: none;
      padding: @padding-8;
      box-sizing: border-box;
      font-family: HanziPenSC-W3;
      font-size: 15px;
    }
  }
  .title {
    font-weight: 600;
    color: @gray-1;
    padding-top: 30px;
  }
  .label {
    display: flex;
    flex-wrap: wrap;
    width: 320px;
    .label-li {
      padding: 2px 10px;
      border-radius: 20px;
      margin: 16px @padding-4 0 0;
      cursor: pointer;
      color: @gray-2;
      transition: @tr;
    }
    .labelSelected {
      background: #ebebeb;
      font-weight: 600;
      color: @gray-1;
    }
  }
  .mzsm {
    padding-top: 10px;
    font-size: 12px;
    color: @gray-3;
  }
  .footbt {
    display: flex;
    justify-content: space-between;
    padding: @padding-20;
    box-sizing: border-box;
    position: fixed;
    bottom: 52px;
    left: 0;
    background: rgba(255, 255, 255, 0.6);
    width: 100%;
    backdrop-filter: blur(10px);
    .submit {
      width: 200px;
      margin-left: @padding-20;
    }
  }
}
</style>
