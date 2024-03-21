<script setup lang="ts">
import { onMounted } from "vue";
import SearchPanel from "./components/SearchPanel.vue";
import PostCard from "./components/PostCard.vue";


import { useBlogStore } from "./stores/postsStore";
const blogStore = useBlogStore();

onMounted(() => {
  blogStore.fetchPosts()
  blogStore.fetchAuthors()
});
</script>

<template>
  <section class="search-section">
    <div class="container">
      <SearchPanel />
    </div>
  </section>
  <section class="results-section">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 results-grid">
        <div class="col" v-for="post in blogStore.FilteredPostsList">
          <PostCard :postDetails="post"></PostCard>
        </div>
      </div>
    </div>
  </section>
</template>
