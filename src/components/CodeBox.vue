<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<template>
  <div class="border border-blue-500 rounded bg-blue-500 p-4">
    <div class="whitespace-pre-wrap" style="tab-size: 2">
      <slot />
    </div>
  </div>
</template>

<style></style>
