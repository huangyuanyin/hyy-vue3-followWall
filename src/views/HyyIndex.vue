<template>
  <div>111</div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { ref } from 'vue'

const getUser = () => {
  axios.post('http://182.61.20.123:3001/singin/match', {
    data: 'aaa',
    pwd: 'dd'
  })
}
getUser()
</script>

<style lang="scss" scoped></style>
