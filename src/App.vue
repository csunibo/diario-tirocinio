<script lang="ts">
import InputForm from './components/InputForm.vue'
import ActivityTable from './components/ActivityTable.vue'

import type { Activity } from './types.ts'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      activities: [] as Activity[],
      id: 0
    }
  },
  methods: {
    addActivity(title: String, time: Number, description: String) {
      let a: Activity = { Id: this.id, Title: title, Duration: time, Description: description }
      this.id++
      this.activities.push(a)
    },

    removeActivity(id: Number) {
      this.activities = this.activities.filter((x) => x.Id !== id)
    }
  },
  components: { InputForm, ActivityTable }
})
</script>

<template>
  <div class="flex justify-center">
    <div class="mt-10 w-[60em]">
      <h1 class="mb-10 p-4 text-center text-2xl font-bold">Diario tirocinio</h1>
      <InputForm @addActivity="addActivity" />
      <ActivityTable
        v-show="activities.length > 0"
        :activities="activities"
        @removeActivity="removeActivity"
      />
    </div>
  </div>
</template>

<style>
body {
  background: #02111b;
}

* {
  color: white;
}
</style>
