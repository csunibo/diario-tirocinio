<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      tmpTitle: '',
      tmpTime: 1,
      tmpDescription: ''
    }
  },
  emits: ['addActivity'],
  methods: {
    handleSubmit(this: any) {
      // Should check for errors :)

      this.$emit('addActivity', this.tmpTitle, this.tmpTime, this.tmpDescription)
      this.tmpTitle = ''
      this.tmpTime = 1
      this.tmpDescription = ''
    }
  }
})
</script>

<template>
  <div class="rounded-lg p-12" style="background-color: #0f1f2a">
    <form @submit.prevent="handleSubmit()">
      <div class="mt-5">
        <label for="title">Titolo: </label>
        <input
          v-model="tmpTitle"
          id="title"
          type="text"
          class="rounded border p-2 bg-sky-100 text-black"
        />
      </div>

      <div class="mt-5">
        <label>Ore:</label>
        <input v-model="tmpTime" type="number" class="rounded border p-2 bg-sky-100 text-black" />
      </div>

      <div class="mt-5">
        <label for="description">Descrizione:</label>
        <textarea
          v-model="tmpDescription"
          placeholder="Add description..."
          required
          class="block h-32 w-full rounded border p-2 outline-none bg-sky-100 text-black"
        ></textarea>
      </div>

      <div class="flex justify-center">
        <button
          class="m-5 w-20 rounded bg-blue-400 p-2 border-0 text-gray-50 hover:bg-blue-500 hover:text-white"
        >
          Add
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
input {
  /*border-bottom: thin solid gray;*/
  display: block;
  width: 100%;
  outline: none;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
