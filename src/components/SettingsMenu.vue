<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      settings: {
        // Da mettere un tipo globale e farselo passare dal genitore
        // per le proprietà già inserite
        orePulsanti: false
      }
    }
  },
  emits: ['close']
})
</script>

<template>
  <div>
    <div @click="$emit('close')" class="w-full h-full">
      <div
        @click.stop=""
        class="bg-csunibo-light-blu w-80 h-full shadow-2xl border-black float-right"
      >
        <div class="pr-5 mb-10 flex justify-between border-b-white border-b mx-4">
          <div class="grid items-center">
            <button @click="$emit('close')" class="w-8 h-8 rounded hover:bg-white/20">
              <span class="icon-[solar--alt-arrow-right-outline] block h-full w-full"></span>
            </button>
          </div>
          <h1 class="font-bold text-center text-xl p-5">SETTINGS</h1>
        </div>
        <div class="p-5">
          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" :value="settings.orePulsanti" class="sr-only peer" />
            <div
              class="relative w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
            <span class="ms-3 text-sm font-medium">Ore a pulsanti</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
