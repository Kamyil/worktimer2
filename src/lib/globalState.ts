import { writable as createGlobalState } from "svelte/store";

export interface IWorkRecord {
  start: { hour: number; minute: number };
  end: { hour: number; minute: number };
  total_time_spent_in_minutes: number;
  name: string;
}

export interface IGlobalState {
  lastUsedId: number;
  work_records: Map<number, IWorkRecord>;
}

export const globalState = createGlobalState<IGlobalState>({
  lastUsedId: 3,
  work_records: new Map([
    [
      1,
      {
        start: { hour: 10, minute: 0 },
        end: { hour: 11, minute: 0 },
        total_time_spent_in_minutes: 60,
        name: "Good morning :)",
      },
    ],
  ]),
});
