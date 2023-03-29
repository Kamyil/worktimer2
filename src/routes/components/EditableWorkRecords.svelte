<script lang="ts">
  import { convertMinutesToHoursAndMinutes, deleteWorkRecord, handleNameInputChange, handleTimeInputChange } from "$lib/actions";
  import { globalState } from "$lib/globalState";
</script>


<div class="overflow-y-auto max-h-96">
  <table class="table-compact table table-zebra w-full">
    <thead>
      <tr>
        <th />
        <th class="text-center">Task</th>
        <th class="text-center">Start</th>
        <th class="text-center">Koniec</th>
        <th class="text-center">Spędzony czas</th>
        <th class="text-center" />
      </tr>
    </thead>
    <tbody class="h-full mt-52 overflow-y-auto">
      {#each [...$globalState.work_records] as [id, workRecord]}
        <tr>
          <td></td>
          <td>
            <input
              class="input-bordered input input-xs  text-center"
              type="text"
              name="work_name"
              id="work_name"
              value={workRecord.name}
              on:input={(event) => handleNameInputChange(event, id)}
            />
          </td>
          <td>
            <input
              class="input-bordered input input-xs w-12 text-center"
              type="number"
              name={`${id}-start-hour`}
              id={`${id}-start-hour`}
              value={workRecord.start.hour}
              on:input={(event) =>
                handleTimeInputChange(event, id, "start", "hour")}
            />
            :
            <input
              class="input-bordered input input-xs w-12 text-center"
              type="number"
              name={`${id}-start-minute`}
              id={`${id}-start-minute`}
              value={workRecord.start.minute}
              on:input={(event) =>
                handleTimeInputChange(event, id, "start", "minute")}
            />
          </td>
          <td>
            <input
              class="input-bordered input input-xs w-12 text-center"
              type="number"
              name={`${id}-end-hour`}
              id={`${id}-end-hour`}
              value={workRecord.end.hour}
              on:input={(event) =>
                handleTimeInputChange(event, id, "end", "hour")}
            />
            :
            <input
              class="input-bordered input input-xs w-12 text-center"
              type="number"
              name={`${id}-end-minute`}
              id={`${id}-end-minute`}
              value={workRecord.end.minute}
              on:input={(event) =>
                handleTimeInputChange(event, id, "end", "minute")}
            />
          </td>
          <td class="text-center text-white">
            {#if workRecord.total_time_spent_in_minutes >= 60}
              {@const { hours, minutes } = convertMinutesToHoursAndMinutes(
                workRecord.total_time_spent_in_minutes
              )}

              {hours}h {minutes}m
            {:else}
              {workRecord.total_time_spent_in_minutes}m
            {/if}
          </td>
          <td>
            <button
              class="btn-outline btn-xs btn"
              on:click={() => deleteWorkRecord(id)}>USUŃ</button
            >
          </td>
        </tr>
      {/each}
    </tbody>
    <!-- <tfoot>
      <tr>
        <th />
        <th />
        <th />
        <th />
        <th class="ext-xs text-center">
          {$globalState.total_hours_and_minutes}
        </th>
      </tr>
    </tfoot> -->
  </table>
</div>
