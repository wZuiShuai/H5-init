<template>
    <div class="hfull">
        <swiper-container class="hfull" direction="vertical">
            <swiper-slide ><Index /></swiper-slide>
            <swiper-slide ><Second /></swiper-slide>
            <swiper-slide ><Third /></swiper-slide>
        </swiper-container>
        <audio ref="music" src="https://img.tukuppt.com/newpreview_music/08/99/29/5c89601863a5b17169.mp3" loop></audio>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, provide, ref } from 'vue'

// 异步导入 swiper 中的页面 不知是否有用  
const Index = defineAsyncComponent(() => import('@/components/Index.vue'))
const Second = defineAsyncComponent(() => import('@/components/Second.vue'))
const Third = defineAsyncComponent(() => import('@/components/Third.vue'))

const music = ref<HTMLAudioElement | null>(null)
const isPlayMusic = ref<boolean>(false)
// 控制 audio 播放音乐
const playMusic = () => {
  if (!isPlayMusic.value && music.value?.paused) {
    music.value?.play()
    isPlayMusic.value = true
  } else {
    music.value?.pause()
    isPlayMusic.value = false
  }
}

// 提供一个值，可以被后代组件注入
provide('playMusic', playMusic)
provide('isPlayMusic', isPlayMusic)
</script>