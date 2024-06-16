<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import type { Activity } from '../types.ts'

export default defineComponent({
  props: {
    activities: {
      type: Object as PropType<Activity[]>,
      required: true
    }
  },
  methods: {}
})
</script>

<template>
  <div v-for="a in activities" class="bg-cyan-50 m-2 p-2">
    {{ a }}
  </div>
</template>

<style></style>
