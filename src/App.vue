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
  mounted() {
    let a = localStorage.getItem('activities')
    if (a != null) {
      this.activities = JSON.parse(a)
    }
  },
  methods: {
    addActivity(title: string, time: number, description: string) {
      let a: Activity = { Id: this.id, Title: title, Duration: time, Description: description }
      this.id++
      this.activities.push(a)

      this.updateLocalStorage()
    },

    removeActivity(id: Number) {
      this.activities = this.activities.filter((x) => x.Id !== id)

      this.updateLocalStorage()
    },

    updateLocalStorage() {
      localStorage.setItem('activities', JSON.stringify(this.activities))
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
