<template>
    <div class="index bg-full hfull flex flex-center bg-no-repeat">
        <img src="@/static/smallImg/music_icon.png" alt="music" class="fixed right-72px top-72px inline-block h62px w62px" :class="{ 'animate-spin': isPlayMusic }" @click="playMusic">
        <div class="contentBg bg-full h1046px w681px flex translate-y-38px items-end bg-no-repeat p18px">
            <div class="bg-full blankContent relative h940px wfull bg-no-repeat p18px">
                <p class="text-center text-55px leading-69px leading-normal tracking-2.75px text-black">诚挚邀请</p>
                <p class="p18px text-justify text-38px leading-loose color-black">
                    阳光灿烂、春暖花开，又是春游的好季节。为了开拓视野，感受春天的美好，陶冶情操，激发对大自然的情感，增进人与自然之间的感情，将组织春游踏青活动，诚邀大家一起参加，享受美好时光!
                </p>
                <p class="absolute bottom-0 right-0px p18px text-38px leading-loose color-black">
                    les's go
                    <br>
                    {{ dayjs().format('M月DD日') }}
                </p>
            </div>
        </div>
        <i class="i-ep-arrow-up-bold fixed bottom-20px left-50% translate-x--50% animate-bounce color-white"></i>
    </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { inject } from 'vue'
// 注入父级组件注入的事件
const playMusic: any = inject('playMusic')
const isPlayMusic: any = inject('isPlayMusic')
</script>