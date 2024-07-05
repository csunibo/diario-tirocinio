<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    copy() {
      console.log(this.$refs)
      navigator.clipboard.writeText((this.$refs.codeContainer as HTMLElement).textContent || '')
    }
  }
})
</script>

<template>
  <div class="border border-blue-500 rounded bg-blue-500 p-4">
    <div class="flex justify-end">
      <button
        @click="copy"
        class="pt-2 pb-2 pl-4 pr-4 bg-blue-400 hover:bg-blue-300 rounded"
        title="Copy the code"
      >
        Copy
      </button>
    </div>
    <div ref="codeContainer" class="whitespace-pre-wrap" style="tab-size: 2">
      <slot />
    </div>
  </div>
</template>

<style></style>
