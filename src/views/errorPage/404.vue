<template>
    <!-- <el-empty>
        <el-button @click="router.push({name:'home'})">返回首页</el-button>
    </el-empty> -->
    <van-empty image="error" description="页面找不到！" class="hfull" >
        <van-button type="primary" @click="router.push({ name: 'home' })">返回首页</van-button>
    </van-empty>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>