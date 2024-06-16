<script lang="ts">
import InputForm from './components/InputForm.vue'
import ActivityTable from './components/ActivityTable.vue'

import type { Activity } from './types.ts'
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  data() {
    return {
      activities: [] as Activity[]
    }
  },
  methods: {
    addActivity(title: String, time: Number, description: String) {
      let a: Activity = { Title: title, Duration: time, Description: description }
      this.activities.push(a)
    }
  },
  components: { InputForm, ActivityTable }
})
</script>

<template>
  <div class="flex justify-center">
    <div class="mt-10 w-[40em]">
      <h1 class="mb-10 p-4 text-center text-2xl font-bold">Diario tirocinio</h1>
      <InputForm @addActivity="addActivity" />
      <ActivityTable :activities="activities" />
    </div>
  </div>
</template>

<style></style>
