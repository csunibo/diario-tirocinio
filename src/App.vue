<script lang="ts">
import InputForm from './components/InputForm.vue'
import ActivityTable from './components/ActivityTable.vue'
import ConvertionWindow from './components/ConvertionWindow.vue'
import InfoMenu from './components/InfoMenu.vue'
import SettingsMenu from './components/SettingsMenu.vue'

import type { Activity } from './types.ts'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      activities: [] as Activity[],
      id: 0,
      duringConversion: false,
      showInfo: false,
      showSettings: false
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
      this.switchMode()
      window.scrollTo(0, 0)
    },

    canConvert(): boolean {
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
  components: { InputForm, ActivityTable, ConvertionWindow, InfoMenu, SettingsMenu }
})
</script>

<template>
  <div>
    <div class="flex justify-center">
      <div class="mt-10 w-[60em]">
        <h1 class="p-2 text-center text-3xl font-bold">Diario tirocinio</h1>
        <h3 class="text-center mb-10">Riassumi velocemente il tuo tirocinio</h3>
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
    <div>
      <div class="flex justify-between absolute top-0 w-full p-10">
        <button @click="showInfo = !showInfo">
          <span class="icon-[solar--info-square-linear] text-3xl"></span>
        </button>
        <button @click="showSettings = !showSettings">
          <span class="icon-[solar--settings-outline] text-3xl"></span>
        </button>
      </div>
      <InfoMenu @close="showInfo = false" v-show="showInfo" />
      <SettingsMenu @close="showSettings = false" v-show="showSettings" />
    </div>
  </div>
</template>

<style>
* {
  color: white;
}
</style>
