<!--
  * 底部：版权、公司等信息
  * 
  * @Author: 曾 
  * @Date:      2022-09-06 20:29:12 
  * @Wechat:   
  * @Email: 739224682@qq.com 
  * @Copyright:  
-->
<template>
  <div class="version" >
      Since 2023-{{ currentYear }}
  </div>
</template>
<script setup>
  import dayjs from 'dayjs';

  const currentYear = dayjs().year();
</script>

<style lang="less" scoped>
  .version {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    a {
      color: rgba(0, 0, 0, 0.45);
    }
    a:hover {
      color: @primary-color;
    }
  }
</style>
