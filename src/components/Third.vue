<template>
    <div class="index bg-full hfull flex flex-center bg-no-repeat">
        <img src="@/static/smallImg/music_icon.png" alt="music" class="fixed right-72px top-72px inline-block h62px w62px" :class="{ 'animate-spin': isPlayMusic }" @click="playMusic">
        <div class="contentBg bg-full h1046px w681px flex translate-y-38px items-end bg-no-repeat p18px">
            <div class="blankContent bg-full relative h940px wfull bg-no-repeat p18px">
                <p class="text-center text-55px leading-69px leading-normal tracking-2.75px text-black">在线报名</p>
                <van-form class="thirdForm" @submit="onSubmit" label-align="top">
                    <van-cell-group inset>
                        <van-field
                            v-model="formValue.name"
                            name="name"
                            label="您的名字"
                            placeholder="姓名"
                            required
                            :rules="[{ required: true, message: '请填写姓名' }]"
                        />
                        <van-field
                            v-model="formValue.phone"
                            name="phone"
                            label="您的手机号"
                            placeholder="手机号"
                            required
                            :rules="[{ required: true, message: '请填写手机号' }]"
                        />
                        <van-field name="peopleNum" label="参加人数" required>
                            <template #input>
                                <van-stepper v-model="formValue.peopleNum" />
                            </template>
                        </van-field>
                        <van-field
                            v-model="formValue.msg"
                            rows="3"
                            autosize
                            required
                            label="留言"
                            type="textarea"
                            maxlength="50"
                            placeholder="请输入留言"
                            show-word-limit
                            :rules="[{ required: true, message: '请填写留言' }]"
                        />
                    </van-cell-group>
                    <div style="margin: 16px;">
                        <van-button round block type="primary" native-type="submit">
                            提交
                        </van-button>
                    </div>
                </van-form>
            </div>
        </div>
        <i class="i-ep-arrow-up-bold fixed bottom-20px left-50% translate-x--50% animate-bounce color-white"></i>
    </div>
</template>

<script setup lang="ts">
import { inject, reactive } from 'vue'
// 注入父级组件注入的事件
const playMusic: any = inject('playMusic')
const isPlayMusic: any = inject('isPlayMusic')

const formValue = reactive({
  name: '',
  phone: '',
  peopleNum: 1,
  msg: '',
})

const onSubmit = () => {
  console.log('submit', formValue)
}
</script>

<style lang="scss">
.thirdForm{
    background: transparent !important;
    height: calc(100% - 69px);
    .van-cell-group{
        background: transparent;
        height: 80%;
        overflow: scroll;
    }
    .van-field{
        background: transparent !important;
        input,textarea{
            background-color: #fff;
            padding: 8px 12px;
        }
    }
}
</style>