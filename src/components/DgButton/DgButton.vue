<!--
 * @Author       : 魏威 <1209562577@qq.com>
 * @Date         : 2023-07-18 17:25 周2
 * @Description  : 
-->
<template>
  <button class="dg-button">{{ props.dgText }}</button>
</template>

<script setup lang="ts">
const props = defineProps({ dgText: { type: String, default: 'DG按钮' } })
</script>

<style scoped>
.dg-button {
  background: palegoldenrod;
}
</style>