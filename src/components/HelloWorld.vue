<template>
  <h1>{{ msg }}</h1>
  <ul>
    <li v-for="(item, index) in products" :key="index">
      {{ index + item.id }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps, reactive } from "vue";
import { useIndex } from "../models/index";
const { products } = await useIndex();
defineProps({
  msg: String,
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
