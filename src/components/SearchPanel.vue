<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useBlogStore } from '@/stores/index.ts'

// access the `store` variable anywhere in the component ✨
const store = useBlogStore()

defineProps<{ searchQuery: string }>();

// const count = ref(0);
</script>

<template>
  <div class="search-panel my-3">
    <form class="d-flex" role="search">
      <div class="input-group">
        <span class="input-group-text" id="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
            ></path>
          </svg>
        </span>
        <input
          class="form-control"
          ref="searchInput"
          @click="$emit('increaseBy', 1)"
          type="text"
          placeholder="Filter by author..."
          aria-label="Filter by author..."
          aria-describedby="search-icon"
        />
      </div>
    </form>
  </div>
</template>
