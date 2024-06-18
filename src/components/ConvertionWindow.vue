<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { Activity } from '@/types'
import CodeBox from './CodeBox.vue'

export default defineComponent({
  props: {
    activities: {
      type: Object as PropType<Activity[]>,
      required: true
    }
  },
  methods: {
    toSimpleJson(): string {
      return JSON.stringify(this.activities, ['Title', 'Duration', 'Description'], '\t')
    }
  },
  components: { CodeBox }
})
</script>

<template>
  <div class="h-full">
    <div class="bg-csunibo-light-blu rounded-b-lg p-12">
      <h1 class="font-bold m-b-2 text-lg mb-2">JSON:</h1>
      <CodeBox>
        {{ toSimpleJson() }}
      </CodeBox>
    </div>
  </div>
</template>

<style></style>
