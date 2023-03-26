<template>
  <div class="wall-message">
    <p class="title">{{ wallType[id]?.name }}</p>
    <p class="slogan">{{ wallType[id]?.slogan }}</p>
    <div class="label">
      <p class="label-list" :class="{ lbselected: nlabel === -1 }" @click="selectNode(-1)">全部</p>
      <p class="label-list" :class="{ lbselected: nlabel === index }" v-for="(e, index) in label[id]" :key="index" @click="selectNode(index)">{{ e }}</p>
    </div>
    <div class="card" :style="{ width: nWidth + 'px' }" v-show="id == 0">
      <NoteCard
        v-for="(e, index) in cards"
        :key="index"
        :note="e"
        class="card-inner"
        :width="'288px'"
        :class="{ cardselected: index == cardSelected }"
        @click="selectCard(index)"
      />
    </div>
    <div class="photo" v-show="id == 1">
      <PhotoCard :photo="e" class="photo-card" v-for="(e, index) in cards" :key="'photoData' + index" @click="selectCard(index)"></PhotoCard>
    </div>
    <div class="add" :style="{ bottom: addBottom + 'px' }" @click="addCard" v-show="!modal">
      <span class="iconfont icon-tianjia"></span>
    </div>
    <HyyModal :title="title" @close="closeModal" :isModal="modal">
      <NewCard :id="id" @addClose="closeModal" v-if="cardSelected == -1"></NewCard>
      <CardDetail v-else :card="cards[cardSelected]"> </CardDetail>
    </HyyModal>
    <HyyViewer :is-view="view" :photos="photoArr" :nowNumber="cardSelected" @viewSwitch="viewSwitch"></HyyViewer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { wallType, label } from '@/utils/data'
import NoteCard from '@/components/NoteCard.vue'
import HyyModal from '@/components/HyyModal.vue'
import NewCard from '@/components/NewCard.vue'
import CardDetail from '@/components/CardDetail.vue'
import PhotoCard from '@/components/PhotoCard.vue'
import HyyViewer from '@/components/HyyViewer.vue'
import { note, photo } from '../../mock/index'
import { useRoute } from 'vue-router'

const route = useRoute()
// const id = ref(0) // 留言墙与照片墙的id
const nlabel = ref(-1) // 当前选中的标签
const noteData = ref(note.data)
const photoData = ref(photo.data)
const photoArr = ref([]) // 图片列表
const nWidth = ref(0) // 卡片模块宽度
const addBottom = ref(30) // 添加按钮距离底部的距离
const title = ref('写留言') // 新建标题
const modal = ref(false) // 是否显示弹窗
const view = ref(false) // 是否显示图片预览
const cardSelected = ref(-1) // 当前选中的卡片

// 留言墙与照片墙的id
const id = computed(() => {
  return route.query.id
})

const cards = computed(() => {
  let a = ''
  if (route.query.id == 0) {
    a = noteData.value
  } else if (route.query.id == 1) {
    a = photoData.value
  }
  return a
})

watch(
  () => id.value,
  () => {
    modal.value = false
    view.value = false
    nlabel.value = -1
    cardSelected.value = -1
  }
)

// 切换label
const selectNode = (e) => {
  nlabel.value = e
}

// note的宽度
const noteWidth = () => {
  let wWidth = document.body.clientWidth // 页面宽度
  nWidth.value = Math.floor((wWidth - 120) / 300) * 300
}

// 监听页面滚动
const scrollBottom = () => {
  // 距离顶部的距离
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  // 屏幕高度
  let clientHeight = document.documentElement.clientHeight
  // 内容高度
  let scrollHeight = document.documentElement.scrollHeight
  if (scrollTop + clientHeight + 230 >= scrollHeight) {
    // 距离底部的距离
    addBottom.value = scrollTop + clientHeight + 230 - scrollHeight
  } else {
    addBottom.value = 30
  }
}

// 新建card
const addCard = () => {
  title.value = '写留言'
  modal.value = true
}

// 切换弹窗
const closeModal = () => {
  modal.value = false
  if (id.value == 1) view.value = false
  cardSelected.value = -1
}

// 选择卡片
const selectCard = (e) => {
  title.value = ''
  if (e != cardSelected.value) {
    cardSelected.value = e
    modal.value = true
    if (id.value == 1) view.value = true
  } else {
    cardSelected.value = -1
    modal.value = false
    if (id.value == 1) view.value = false
  }
}

// 获取图片列表
const getPhoto = () => {
  for (let i = 0; i < photoData.value.length; i++) {
    photoArr.value.push(photoData.value[i]?.imgurl)
  }
}

// 切换图片
const viewSwitch = (e) => {
  if (e == 0) {
    cardSelected.value--
  } else {
    cardSelected.value++
  }
}

onMounted(() => {
  noteWidth()
  getPhoto()
  // 监听屏幕宽度变化
  window.addEventListener('resize', noteWidth)
  // 监听滚动高度变化
  window.addEventListener('scroll', scrollBottom)
  console.log(`output->photoData`, photoData.value)
})

onUnmounted(() => {
  window.removeEventListener('resize', noteWidth)
})
</script>

<style lang="less" scoped>
.wall-message {
  min-height: 700px;
  padding-top: 52px;
  .title {
    padding-top: 48px;
    padding-bottom: 8px;
    font-size: 56px;
    font-weight: 600;
    color: @gray-1;
    text-align: center;
  }
  .slogan {
    color: @gray-2;
    text-align: center;
  }
  .label {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    .label-list {
      padding: 0 14px;
      margin: @padding-4;
      height: 30px;
      display: flex;
      align-items: center;
      color: @gray-2;
      cursor: pointer;
      box-sizing: border-box;
    }
    .lbselected {
      color: @gray-1;
      font-weight: 600;
      border: 1px solid @gray-1;
      border-radius: 16px;
    }
  }
  .card {
    display: flex;
    flex-wrap: wrap;
    padding-top: 28px;
    margin: 0 auto;
    .card-inner {
      margin: 6px;
    }
    .cardselected {
      border: 1px solid @primary-color;
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
    }
  }
  .photo {
    width: 88%;
    margin: 0 auto;
    columns: 6;
    column-gap: @padding-4;
    padding-top: 28px;
  }
  .photo-card {
    margin-top: @padding-4;
  }
  .add {
    width: 56px;
    height: 56px;
    background: @gray-1;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
    border-radius: 28px;
    position: fixed;
    right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: @tr;
    cursor: pointer;
    .icon-tianjia {
      color: @gray-10;
      font-size: 24px;
    }
  }
}
</style>
