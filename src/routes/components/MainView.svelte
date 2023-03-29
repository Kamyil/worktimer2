<script lang="ts">
  import { addBreak, addNewWorkRecord, convertMinutesToHoursAndMinutes } from "$lib/actions";
  import { globalState } from "$lib/globalState";
  import { loadStateFromLocalStorage, saveStateToLocalStorage } from "$lib/localStorage";
  import { onMount } from "svelte";
  import Collapse from "./Collapse.svelte";
  import EditableWorkRecords from "./EditableWorkRecords.svelte";
  import StateImportExport from "./StateImportExport.svelte";
  import SummedWorkRecords from "./SummedWorkRecords.svelte";

  $: totalHoursAndMinutes = () => {
    let totalMinutes = 0;
    $globalState.work_records.forEach(({total_time_spent_in_minutes}) => {
      totalMinutes += total_time_spent_in_minutes;
    });

    let { hours, minutes } = convertMinutesToHoursAndMinutes(totalMinutes);

    return `${hours}h ${minutes}m`;
  }

  // 900 000 milliseconds = 15 minutes
  const SAVE_TO_LOCAL_STORAGE_INTERVAL_IN_MS = 900000;

  onMount(() => {
    setInterval(saveStateToLocalStorage, SAVE_TO_LOCAL_STORAGE_INTERVAL_IN_MS);
  });
</script>

<div class="mainview flex h-full w-full flex-col items-center justify-center">
  <div class="mockup-window border border-base-300">
    <Collapse openedByDefault={true} title="Zsumowane czasy pracy">
      <SummedWorkRecords />
    </Collapse>

    <!-- Editable work records -->
    <Collapse openedByDefault={true} title="Wpisy pracy">
      <EditableWorkRecords />
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">ŁĄCZNIE</div>
          <div class="stat-value">{totalHoursAndMinutes()}</div>
          <!-- <div class="stat-desc">21% more than last month</div> -->
        </div>
      </div>
    </Collapse>
    <div class="m-2 flex justify-end">
      <button class="btn-outline btn-sm btn mx-2" on:click={addNewWorkRecord}>
        Dodaj wpis
      </button>

      <button class="btn-outline btn-sm btn" on:click={addBreak}>
        Dodaj przerwę
      </button>
    </div>

    <div class="m-5 flex">
      <div class="shadow mx-2">
        <span class="chat-header">STAN Z PLIKU</span>
        <StateImportExport />
      </div>
      <div class="d-block my-5" />

      <div class="shadow">
        <span class="chat-header">LOCAL STORAGE</span>
        <br>
        <div class="my-2 flex">
        <button
          class="btn-outline btn-sm btn"
          on:click={saveStateToLocalStorage}>Zapisz</button
        >
        <button
          class="btn-outline btn-sm btn"
          on:click={loadStateFromLocalStorage}>Wczytaj</button
        >
      </div>
      </div>
    </div>
  </div>
</div>
