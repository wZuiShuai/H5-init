<template>
    <div class="index bg-full hfull flex flex-center bg-no-repeat">
        <img src="@/static/smallImg/music_icon.png" alt="music" class="fixed right-72px top-72px z-999 inline-block h62px w62px" :class="{ 'animate-spin': isPlayMusic }" @click="playMusic">
        <div class="bg-full contentBg h1046px w681px flex translate-y-38px items-end bg-no-repeat p18px">
            <div class="bg-full content relative h940px wfull bg-no-repeat">
                <p class="mt21px text-center text-55px leading-69px leading-normal tracking-2.75px text-black">travel</p>
                <div class="mxauto mt100px h288px w500px text-center leading-tight">
                    <p class="title-color1 bg-clip-text text-120px fw600 c-transparent">不负春光</p>
                    <p class="title-color2 bg-clip-text text-120px fw600 c-transparent">快乐春游</p>
                    <p class="small-title-color small-title-border my12px p8px text-center text-35px fw800">踏青亲子活动邀请涵</p>
                    <p class="small-title-color text-center text-35px">我们一起去春游啦</p>
                </div>
                <img src="@/static/home/chilend.png" alt="chilend" class="absolute bottom-18px right-18px inline-block h204.626px w413.97px">
            </div>
        </div>
        <i class="i-ep-arrow-up-bold fixed bottom-20px left-50% z-999 translate-x--50% animate-bounce color-white"></i>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
// 注入父级组件注入的事件
const playMusic: any = inject('playMusic')
const isPlayMusic: any = inject('isPlayMusic')
</script>