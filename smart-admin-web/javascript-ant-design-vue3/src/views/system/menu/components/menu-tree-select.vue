<!--
  * 菜单 表单 树形下拉框
  *
  * @Author: 曾
  * @Date:      2022-06-12 20:11:39
  * @Wechat:  
  * @Email: 739224682@qq.com
  * @Copyright: 
-->
<template>
  <a-tree-select
    :value="props.value"
    :treeData="treeData"
    :fieldNames="{ label: 'menuName', key: 'menuId', value: 'menuId' }"
    show-search
    style="width: 100%"
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    placeholder="请选择菜单"
    allow-clear
    tree-default-expand-all
    treeNodeFilterProp="menuName"
    @change="treeSelectChange"
  />
</template>
<script setup>
  import { onMounted, ref, watch } from 'vue';
  import { menuApi } from '/@/api/system/menu/menu-api';
  import _ from 'lodash';

  const props = defineProps({
    value: Number,
  });

  let treeData = ref([]);
  async function queryMenuTree() {
    let res = await menuApi.queryMenuTree(true);
    treeData.value = res.data;
  }

  onMounted(queryMenuTree);

  const emit = defineEmits(['update:value']);
  function treeSelectChange(e) {
    emit('update:value', e);
  }

  defineExpose({
    queryMenuTree,
  });
</script>
