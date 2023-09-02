<script>
  import {
    loadStateFromLocalStorage,
    saveStateToLocalStorage,
  } from "$lib/localStorage";
  import StateImportExport from "./StateImportExport.svelte";
</script>

<div class="flex flex-col">
  <div class="m-2 shadow">
    <button class="btn-outline btn-sm btn" on:click={saveStateToLocalStorage}
      >Zapisz do local storage</button
    >
    <button class="btn-outline btn-sm btn" on:click={loadStateFromLocalStorage}
      >Wczytaj z local storage</button
    >
    <StateImportExport />
  </div>
</div>
