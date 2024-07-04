<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['close']
})
</script>

<template>
  <div>
    <div class="w-full h-full">
      <div
        @click.stop=""
        class="bg-csunibo-light-blu w-80 h-full shadow-2xl border-black flex flex-col justify-between"
      >
        <div class="pl-5 flex justify-between align-center border-b border-b-white mx-4">
          <h1 class="font-bold text-center text-xl p-5">INFO</h1>
          <div class="grid items-center">
            <button @click="$emit('close')" class="w-8 h-8 rounded hover:bg-white/20">
              <span class="icon-[solar--alt-arrow-left-outline] block h-full w-full"></span>
            </button>
          </div>
        </div>
        <div>
          <p class="m-5 p-5 bg-blue-500/[0.8] rounded-lg">
            <b>NOTA:</b> Il PDF ottenuto non è un documento ufficiale valido, ma una bozza utile del
            lavoro svolto da trascrivere successivamente sul documento ufficiale fornitosi dalla
            piattaforma tirocini unibo.
          </p>
          <p class="m-5 p-5 bg-red-500/[0.8] rounded-lg">
            <b>NOTA tecnica:</b> I dati sono salvati sul local-storage. Se si cancella la cache del
            browser veranno persi.
          </p>
        </div>
        <div>
          <a
            href="https://csunibo.students.cs.unibo.it/wiki/applicativi-web/diario-tirocinio/index.html"
            class="block p-5 border-blue-500 border text-center m-5 text-blue-500 rounded hover:bg-blue-400 hover:text-white hover:border-blue-400"
            >Documentazione</a
          >
          <a
            href="https://csunibo.students.cs.unibo.it"
            class="block p-5 border-blue-500 border text-center m-5 text-blue-500 rounded hover:bg-blue-400 hover:text-white hover:border-blue-400"
            >CSUnibo</a
          >
          <a
            href="https://github.com/csunibo/diario-tirocinio"
            class="block p-5 border-blue-500 border text-center m-5 text-blue-500 rounded hover:bg-blue-400 hover:text-white hover:border-blue-400"
            >Contribuisci</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
