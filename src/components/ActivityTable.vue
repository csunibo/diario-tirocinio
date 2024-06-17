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
  emits: ['removeActivity', 'clearAll'],
  methods: {
    remove(id: Number) {
      this.$emit('removeActivity', id)
    },
    countHours() {
      return this.activities.reduce((acc, a) => a.Duration + acc, 0)
    },
    clearAll() {
      this.$emit('clearAll')
    }
  }
})
</script>

<template>
  <div class="mt-4 p-12 rounded-lg bg-csunibo-light-blu">
    <div class="flex justify-between">
      <h1 class="font-bold m-2 text-lg p-2">Total activities: {{ activities.length }}</h1>
      <h1 class="font-bold m-2 text-lg p-2">Total hours: {{ countHours() }}</h1>
    </div>
    <div
      v-for="a in activities"
      class="p-2 mt-2 mb-2 bg-sky-100 rounded text-black flex flex-row justify-between"
    >
      <div class="flex-auto p-2">
        <div class="flex justify-between">
          <h1 class="text-black inline">Title: {{ a.Title }}</h1>
          <span class="text-black">Duration: {{ a.Duration }}</span>
          <span class="text-black">ID: {{ a.Id }}</span>
        </div>
        <p class="text-black whitespace-pre-line">{{ a.Description }}</p>
      </div>
      <div class="flex items-center">
        <button class="p-2 bg-red-400 rounded h-16 hover:bg-red-500" @click="remove(a.Id)">
          Delete
        </button>
      </div>
    </div>
    <div class="mt-4">
      <button @click="clearAll" class="p-2 bg-red-500 rounded h-16 hover:bg-red-600">
        REMOVE ALL
      </button>
    </div>
  </div>
</template>

<style></style>
