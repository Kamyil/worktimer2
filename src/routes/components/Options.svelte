<script>

  import { loadStateFromLocalStorage, saveStateToLocalStorage } from "$lib/localStorage";
  import StateImportExport from "./StateImportExport.svelte";

</script>
<div class="flex flex-col">
  <div class="shadow m-2">
    <StateImportExport />
      <button class="btn-outline btn-sm btn" on:click={saveStateToLocalStorage}
        >Zapisz do local storage</button
      >
      <button
        class="btn-outline btn-sm btn"
        on:click={loadStateFromLocalStorage}>Wczytaj z local storage</button
      >
  </div>
</div>