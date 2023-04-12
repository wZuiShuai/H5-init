<template>
    <RouterView />
</template>

<script setup lang="ts">
// 引入并注册 swiper 插件
import { register } from 'swiper/element/bundle'
register()
</script>
