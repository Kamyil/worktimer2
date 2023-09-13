<script lang="ts">
  import { convertMinutesToHoursAndMinutes } from "$lib/actions";
  import { globalState, type IWorkRecord } from "$lib/globalState";
  import {
    loadStateFromLocalStorage,
    saveStateToLocalStorage,
  } from "$lib/localStorage";
  import { fly } from "svelte/transition";
  import StateImportExport from "./StateImportExport.svelte";

  $: summedWorkRecords = [...$globalState.work_records.values()].reduce(
    (acc, record) => {
      const { name, total_time_spent_in_minutes } = record;

      if (acc.has(name)) {
        const existingEntry = acc.get(name)!;
        existingEntry.total_time_spent_in_minutes +=
          total_time_spent_in_minutes;
      } else {
        acc.set(name, { name, total_time_spent_in_minutes });
      }

      return acc;
    },
    new Map<
      string,
      {
        name: IWorkRecord["name"];
        total_time_spent_in_minutes: IWorkRecord["total_time_spent_in_minutes"];
      }
    >()
  );
</script>

<div class="min-h-96 overflow-y-auto w-full">
  <table class="table-compact table">
    <thead>
      <th class="text-center">TASK</th>
      <th>CZAS ZSUMOWANY</th>
    </thead>
    <tbody>
      {#each [...summedWorkRecords] as [id, workRecord]}
        <tr transition:fly={{ y: -200, duration: 200 }}>
          <td class="text-center  break-all" style="max-width: 220px;">
            <div class=" break-all" style="max-width: 210px;">{workRecord.name}</div>
          </td>
          <td class="text-center">
            {#if workRecord.total_time_spent_in_minutes >= 60}
              {@const { hours, minutes } = convertMinutesToHoursAndMinutes(
                workRecord.total_time_spent_in_minutes
              )}

              <div class="break-all h-fit">{hours}h {minutes}m</div>
            {:else}
              <div class="break-all">{workRecord.total_time_spent_in_minutes}m</div>
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
