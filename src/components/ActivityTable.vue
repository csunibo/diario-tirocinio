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
  <div class="bg-cyan-50 mt-4 p-12 rounded-lg" style="background-color: #0f1f2a">
    <div v-for="a in activities" class="p-2 m-2 bg-sky-100 rounded text-black">
      {{ a }}
    </div>
  </div>
</template>

<style></style>
