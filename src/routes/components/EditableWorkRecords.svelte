<script lang="ts">
  import { convertMinutesToHoursAndMinutes, deleteWorkRecord, handleNameInputChange, handleTimeInputChange } from "$lib/actions";
  import { globalState } from "$lib/globalState";
</script>


<div class="overflow-y-auto max-h-[600px]">
  <table class="table table-zebra w-full">
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
          <td class="w-fit">
            <input
              class="w-full input-bordered input input-md  text-center"
              type="text"
              name="work_name"
              id="work_name"
              value={workRecord.name}
              on:input={(event) => handleNameInputChange(event, id)}
            />
          </td>
          <td class="w-fit">
            <div class="w-full text-center">
            <input
              class="input-bordered input input-md w-20 text-center"
              type="number"
              name={`${id}-start-hour`}
              id={`${id}-start-hour`}
              min="0"
              max="23"
              value={workRecord.start.hour}
              on:input={(event) =>
                handleTimeInputChange(event, id, "start", "hour")}
            />
            :
            <input
              class="input-bordered input input-md w-20 text-center"
              type="number"
              name={`${id}-start-minute`}
              id={`${id}-start-minute`}
              min="0"
              max="59"
              value={workRecord.start.minute}
              on:input={(event) =>
                handleTimeInputChange(event, id, "start", "minute")}
            />
          </div>
          </td>
          <td class="w-fit">
            <div class="w-full text-center">
            <input
              class="input-bordered input input-md w-20 text-center"
              type="number"
              name={`${id}-end-hour`}
              id={`${id}-end-hour`}
              min="0"
              max="23"
              value={workRecord.end.hour}
              on:input={(event) =>
                handleTimeInputChange(event, id, "end", "hour")}
            />
            :
            <input
              class="input-bordered input input-md w-20 text-center"
              type="number"
              name={`${id}-end-minute`}
              id={`${id}-end-minute`}
              min="0"
              max="59"
              value={workRecord.end.minute}
              on:input={(event) =>
                handleTimeInputChange(event, id, "end", "minute")}
            />
          </div>
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
