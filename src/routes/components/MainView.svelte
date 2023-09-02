<script lang="ts">
  import { addBreak, addNewWorkRecord, convertMinutesToHoursAndMinutes } from "$lib/actions";
  import { globalState } from "$lib/globalState";
  import { loadStateFromLocalStorage, saveStateToLocalStorage } from "$lib/localStorage";
  import { onMount } from "svelte";
  import Collapse from "./Collapse.svelte";
  import EditableWorkRecords from "./EditableWorkRecords.svelte";
  import Options from "./Options.svelte";
  import StateImportExport from "./StateImportExport.svelte";
  import SummedWorkRecords from "./SummedWorkRecords.svelte";

  $: totalHoursAndMinutes = () => {
    let totalMinutes = 0;
    $globalState.work_records.forEach(({ total_time_spent_in_minutes }) => {
      totalMinutes += total_time_spent_in_minutes;
    });

    let { hours, minutes } = convertMinutesToHoursAndMinutes(totalMinutes);

    return `${hours}h ${minutes}m`;
  };

  // 900 000 milliseconds = 15 minutes
  const SAVE_TO_LOCAL_STORAGE_INTERVAL_IN_MS = 900000;

  onMount(() => {
    setInterval(saveStateToLocalStorage, SAVE_TO_LOCAL_STORAGE_INTERVAL_IN_MS);
  });
</script>


<div class="mainview flex h-fit w-full items-center justify-center">

  <div class="mockup-window border border-zinc-900">
    <Options/>

  <div class="flex flex-row-reverse">
    <div class="w-3/12">
      <Collapse openedByDefault={true} title="GRUPY">
        <SummedWorkRecords />
      </Collapse>
    </div>

    <!-- Editable work records -->
    <div class="w-9/12">
      <Collapse openedByDefault={true} title="POJEDYNCZE">
        <EditableWorkRecords />
        <div class="stats w-full shadow">
          <div class="stat flex flex-col items-end">
            <div class="stat-title">ŁĄCZNIE</div>
            <div class="stat-value">{totalHoursAndMinutes()}</div>
            <!-- <div class="stat-desc">21% more than last month</div> -->
          </div>
        </div>
        <div class="m-2 flex justify-end">
          <button class="btn-outline btn-sm btn mx-2" on:click={() => {
            addNewWorkRecord();
            saveStateToLocalStorage();
          }}>
            <!-- <kbd class="kbd kbd-sm mr-2">N</kbd> -->
            Dodaj wpis
          </button>

          <button class="btn-outline btn-sm btn" on:click={() => {
            addBreak();
            saveStateToLocalStorage();
          }}>
            <!-- <kbd class="kbd kbd-sm mr-2">B</kbd> -->
            Dodaj przerwę
          </button>
        </div>
      </Collapse>
    </div>
  </div>
  </div>
</div>
