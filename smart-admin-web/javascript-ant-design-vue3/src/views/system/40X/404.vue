<!--
  * 403 不存在 页面
  * 
  * @Author: 曾 
  * @Date:      2022-08-08 20:46:18
  * @Wechat:   
  * @Email: 739224682@qq.com 
  * @Copyright:  
-->
<template>
  <a-result status="403" title="对不起，您访问的内容不存在！">
    <template #extra>
      <a-button type="primary" @click="goHome">返回ホームページ</a-button>
    </template>
  </a-result>
</template>
<script setup>
  import { useRouter } from 'vue-router';
  import { HOME_PAGE_NAME } from '/@/constants/system/home-const';

  function goHome() {
    useRouter().push({ name: HOME_PAGE_NAME });
  }
</script>
