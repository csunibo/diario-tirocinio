<script></script>

<template>
  <div class="p-2">
    <form>
      <div class="mt-5">
        <label for="title">Titolo: </label>
        <input id="title" type="text" class="rounded border p-2" />
      </div>

      <div class="mt-5">
        <label>Ore:</label>
        <input type="number" class="rounded border p-2" />
      </div>

      <div class="mt-5">
        <label for="description">Descrizione:</label>
        <textarea class="block w-full border h-32 p-2 outline-none rounded"></textarea>
      </div>

      <div class="flex justify-center">
        <button class="m-5 border rounded p-2 w-20 bg-blue-300">Add</button>
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
