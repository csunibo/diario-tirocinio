<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { Activity } from '@/types'

export default defineComponent({
  props: {
    activities: {
      type: Object as PropType<Activity[]>,
      required: true
    }
  },
  methods: {
    toSimpleJson(): string {
      return 'WEEEEEEE'
    }
  }
})
</script>

<template>
  <div class="h-full">
    {{ activities }}
    {{ toSimpleJson() }}
  </div>
</template>

<style></style>
