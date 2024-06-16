<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      tmpTitle: '',
      tmpTime: 0,
      tmpDescription: ''
    }
  },
  emits: ['addActivity'],
  methods: {
    handleSubmit(this: any) {
      // Should check for errors :)

      this.$emit('addActivity', this.tmpTitle, this.tmpTime, this.tmpDescription)
    }
  }
})
</script>

<template>
  <div class="p-2">
    <form @submit.prevent="handleSubmit()">
      <div class="mt-5">
        <label for="title">Titolo: </label>
        <input v-model="tmpTitle" id="title" type="text" class="rounded border p-2" />
      </div>

      <div class="mt-5">
        <label>Ore:</label>
        <input v-model="tmpTime" type="number" class="rounded border p-2" />
      </div>

      <div class="mt-5">
        <label for="description">Descrizione:</label>
        <textarea
          v-model="tmpDescription"
          placeholder="Add description..."
          class="block h-32 w-full rounded border p-2 outline-none"
        ></textarea>
      </div>

      <div class="flex justify-center">
        <button class="m-5 w-20 rounded border bg-blue-300 p-2">Add</button>
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
