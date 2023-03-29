<script lang="ts">
	import type { IWorkRecord } from '$lib/types';
	import { globalState } from '../../lib/globalState';
	import EmployeeRow from './WorkRecordsPanel/EmployeeRow.svelte';
	import { fly } from 'svelte/transition';
	import Button from './common/Button.svelte';

	let workRecordsThisDay: IWorkRecord[] = [];

	// @ts-ignore - Undefineds are filtered out. Dunno why TS is mad :/
	$: workRecordsThisDay = [...$globalState.employees]
		.filter(({ '1': employee }) => employee.work_records.get($globalState.pickedDate) !== undefined)
		.map(({ '1': employee }) => employee.work_records.get($globalState.pickedDate));

	function openAddWorkRecordFormModal() {
		globalState.update((state) => {
			state.modals.addNewWorkRecord.isOpened = true;
			return state;
		});
	}
</script>

<div class="mockup-window m-1 h-screen  border-2 border-neutral-900 bg-transparent shadow-xl">
	<div class="">
		{#if workRecordsThisDay.length > 0}
			{#each workRecordsThisDay as workRecord}
				<div in:fly={{ y: 50, duration: 200 }} out:fly={{ duration: 50 }}>
					<EmployeeRow {workRecord} />
				</div>
			{/each}
			<div class="box h-30 m-5 flex w-auto justify-center rounded-3xl  p-3">
				<Button htmlFor="add-new-record-modal" onClick={openAddWorkRecordFormModal}
					>+ Dodaj wpis</Button
				>
			</div>
		{:else}
			<div class="hero bg-transparent" in:fly={{ y: 50, duration: 200 }} out:fly={{ duration: 50 }}>
				<div class="hero-content text-center">
					<div class="max-w-md">
						<h1 class="text-5xl font-bold">Brak wpisów pracy na dziś!</h1>
						<p class="py-6">Dodaj wpis przyciskiem poniżej albo ciesz się spokojem ducha!</p>
					</div>
				</div>
			</div>
			<div class="box h-30 m-5 flex w-auto justify-center rounded-3xl  p-3">
				<Button htmlFor="add-new-record-modal" onClick={openAddWorkRecordFormModal}
					>+ Dodaj wpis</Button
				>
			</div>
		{/if}
	</div>
</div>
