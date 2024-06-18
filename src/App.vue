<script lang="ts">
import InputForm from './components/InputForm.vue'
import ActivityTable from './components/ActivityTable.vue'
import ConvertionWindow from './components/ConvertionWindow.vue'

import type { Activity } from './types.ts'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      activities: [] as Activity[],
      id: 0,
      duringConversion: false
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

    removeActivity(id: Number): void {
      this.activities = this.activities.filter((x) => x.Id !== id)
      this.updateLocalStorage()
    },

    clearAll(): void {
      this.activities = []
      this.updateLocalStorage()
    },

    updateLocalStorage(): void {
      localStorage.setItem('activities', JSON.stringify(this.activities))
    },

    convert(): void {
      console.log('RICHIESTA CONVERSIONE :)')
    },

    canConvert(): boolean {
      console.log(this.activities.length)
      return this.activities.length > 0
    },

    switchMode(): void {
      if (this.activities.length <= 0) {
        this.duringConversion = false
      } else {
        this.duringConversion = !this.duringConversion
      }
    }
  },
  components: { InputForm, ActivityTable, ConvertionWindow }
})
</script>

<template>
  <div>
    <div class="flex justify-center">
      <div class="mt-10 w-[60em]">
        <h1 class="mb-10 p-4 text-center text-2xl font-bold">Diario tirocinio</h1>
        <div class="flex justify-between border-b-csunibo-dark-blu border-b-4">
          <button
            @click="switchMode"
            :disabled="!duringConversion"
            class="w-full p-4 rounded-tl-lg enabled:hover:bg-blue-400 font-bold"
            :class="{ 'bg-csunibo-light-blu': duringConversion, 'bg-blue-500': !duringConversion }"
          >
            Insert
          </button>
          <button
            @click="switchMode"
            :disabled="duringConversion || !canConvert()"
            class="w-full p-4 rounded-tr-lg font-bold"
            :class="{
              'bg-csunibo-light-blu': !duringConversion,
              'bg-blue-500': duringConversion,
              'enabled:hover:bg-blue-400': canConvert(),
              'opacity-50': !canConvert()
            }"
          >
            Convert
          </button>
        </div>
        <div v-show="!duringConversion">
          <InputForm @addActivity="addActivity" />
          <ActivityTable
            v-show="activities.length > 0"
            :activities="activities"
            @removeActivity="removeActivity"
            @clearAll="clearAll"
            @convert="convert"
          />
        </div>
        <div v-show="duringConversion">
          <ConvertionWindow :activities="activities" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
* {
  color: white;
}
</style>
