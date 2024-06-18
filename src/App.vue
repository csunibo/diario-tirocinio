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
  components: { InputForm, ActivityTable, ConvertionWindow }
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
    <div class="flex justify-between absolute top-0 w-full p-10">
      <button>
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          class="fill-csunibo-dark-grey hover:fill-gray-100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8Z"
          />
          <path
            d="M12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z"
          />
        </svg>
      </button>
      <button>
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          class="stroke-csunibo-dark-grey hover:stroke-gray-100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="3" stroke-width="1.5" />
          <path
            d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z"
            stroke-width="1.5"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style>
* {
  color: white;
}
</style>
