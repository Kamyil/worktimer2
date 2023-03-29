import { get } from 'svelte/store';
import { globalState, type IGlobalState } from "./globalState";

export function saveStateToLocalStorage(): void {
  let state = get(globalState);
  let stateSerialized = JSON.stringify({
    ...state,
    work_records: [...state.work_records]
  });

  localStorage.setItem(
    'state', 
    stateSerialized
  );
}

export function loadStateFromLocalStorage(): void {
  let loadedState = JSON.parse(localStorage.getItem('state') as string) as unknown as IGlobalState;

  globalState.set({
    ...loadedState,
    work_records: new Map(loadedState.work_records)
  });
}