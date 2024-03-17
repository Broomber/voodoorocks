<script setup lang="ts">
import { ref } from "vue";
import SearchPanel from './components/SearchPanel.vue'

const searchQuery = ref("");
</script>


<template>
  <div class="container">
    <SearchPanel :searchQuery="searchQuery" />
  </div>
</template>
