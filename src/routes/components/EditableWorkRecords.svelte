<script lang="ts">
  import {
    convertMinutesToHoursAndMinutes,
    deleteWorkRecord,
    handleNameInputChange,
    handleTimeInputChange,
    handleTimeButtonClick,
  } from "$lib/actions";
  import { globalState } from "$lib/globalState";
  import { saveStateToLocalStorage } from "$lib/localStorage";
  import { fly } from 'svelte/transition';
  import CurrentTimeIcon from "./common/icons/CurrentTimeIcon.svelte";
  import Tooltip from "./common/Tooltip.svelte";
</script>

<div class="max-h-[600px] overflow-y-auto">
  <table class="table-zebra table w-full">
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
    <tbody class="mt-52 h-full overflow-y-auto">
      {#each [...$globalState.work_records] as [id, workRecord]}
        <tr transition:fly={{ y: -200, duration: 200 }}>
          <td />
          <td class="w-fit">
            <input
              class="input-bordered input input-md w-full  text-center"
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
              <button
                class="btn-outline btn-xs btn py-1 align-middle fill-amber-400 hover:fill-black mx-2"
                name={`${id}-start-time-button`}
                id={`${id}-start-time-button`}
                on:click={(event) => 
                  handleTimeButtonClick(event, id, "start")}
               >
                <CurrentTimeIcon/>
               </button>
               <Tooltip targetId={`set-current-time-btn__start-time__${id}`}/>
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
                 <button
                    class="btn-outline btn-xs btn py-1 mx-2 align-middle fill-amber-400 hover:fill-black"
                    name={`${id}-end-time-button`}
                    id={`${id}-end-time-button`}
                    on:click={(event) => 
                      handleTimeButtonClick(event, id, "end")}
               >
               <CurrentTimeIcon/>
               </button>
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
              on:click={() => {
                deleteWorkRecord(id)
                saveStateToLocalStorage();
              }}>USUŃ</button
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
