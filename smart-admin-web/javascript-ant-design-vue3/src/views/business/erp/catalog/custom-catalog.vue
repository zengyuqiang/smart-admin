<!--
  * 目录  demo
  *
  * @Author: 曾
  * @Date:      2022-08-21 19:52:43
  * @Wechat:  
  * @Email: 739224682@qq.com
  * @Copyright: 
-->
<template>
  <div>
    <CategoryTreeTable :category-type="CATEGORY_TYPE_ENUM.DEMO.value" :privilegePrefix="'custom'"/>
  </div>
</template>
<script setup>
  import CategoryTreeTable from './components/category-tree-table.vue';
  import { CATEGORY_TYPE_ENUM } from '/@/constants/business/erp/category-const';
</script>
