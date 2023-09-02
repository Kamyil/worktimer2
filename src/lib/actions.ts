import { getHours, getMinutes } from "date-fns";
import { globalState, type IWorkRecord } from "./globalState";

/**
 * @returns total time spent in minutes
 */
export function calcTotalTimeSpentForTask({
  start,
  end,
}: {
  start: IWorkRecord["start"];
  end: IWorkRecord["end"];
}): number {
  let today = new Date();
  let time1 = today.setHours(start.hour);
  time1 = today.setMinutes(start.minute);

  let time2 = today.setHours(end.hour);
  time2 = today.setMinutes(end.minute);

  return (time2 - time1) / 1000 / 60;
}

export function deleteWorkRecord(workRecordId: number) {
  globalState.update((state) => {
    if (state.work_records.has(workRecordId)) {
      state.work_records.delete(workRecordId);
    } else throw Error(`Couldn't find work record with id=${workRecordId}`);

    return state;
  });
}

export function handleTimeInputChange(
  event: Event,
  workRecordId: number,
  startOrEnd: "start" | "end",
  hourOrMinute: "hour" | "minute"
) {
  globalState.update((currentState) => {
    let workRecord = currentState.work_records.get(workRecordId);
    let newTotalTimeSpentThisDayInMinutes = 0;

    // Update start/end hour/minute for this work record
    if (workRecord) {
      workRecord[startOrEnd][hourOrMinute] = Number(
        (event.target as HTMLInputElement).value
      );
    } else throw Error(`Couldn't find work record with id=${workRecordId}`);

    updateTotalTimes(workRecord, currentState);

    // Then update whole state
    return currentState;
  });
}

export function handleTimeButtonClick(
  event: Event,
  workRecordId: number,
  startOrEnd: "start" | "end"
) {
  globalState.update((currentState) => {
    let workRecord = currentState.work_records.get(workRecordId);
    if(workRecord){
      const currentDate = new Date();
      workRecord[startOrEnd]['hour'] = currentDate.getHours();
      workRecord[startOrEnd]['minute'] = currentDate.getMinutes();
      
      updateTotalTimes(workRecord, currentState);
    } else throw Error(`Couldn't find work record with id=${workRecordId}`);
    return currentState;
  });
}

export function updateTotalTimes(workRecord, currentState){
  let newTotalTimeSpentThisDayInMinutes = 0;

  workRecord.total_time_spent_in_minutes = calcTotalTimeSpentForTask({
    start: workRecord.start,
    end: workRecord.end,
  });
  // Then recalculate total spent time this day
  currentState.work_records.forEach((workRecord) => {
    newTotalTimeSpentThisDayInMinutes +=
      workRecord.total_time_spent_in_minutes;
  });
}

export function convertMinutesToHoursAndMinutes(minutes: number): {
  hours: string;
  minutes: string;
} {
  if (minutes >= 60) {
    let hours: number = Math.floor(minutes / 60);
    let restOfTheMinutes: number = minutes % 60;

    return {
      hours: hours < 10 ? "0" + hours : String(hours),
      minutes:
        restOfTheMinutes < 10
          ? "0" + restOfTheMinutes
          : String(restOfTheMinutes),
    };
  } else {
    return {
      hours: "0",
      minutes: String(minutes),
    };
  }
}

export function handleNameInputChange(event: Event, workRecordId: number) {
  globalState.update((state) => {
    if (state.work_records.has(workRecordId)) {
      state.work_records.get(workRecordId)!.name = String(
        (event.target as HTMLInputElement).value
      );
    } else throw Error(`Couldn't find work record with id=${workRecordId}`);

    return state;
  });
}

export function addNewWorkRecord() {
  globalState.update((state) => {
    const startTime = new Date();
    let endTime = new Date();
    endTime.setMinutes(startTime.getMinutes() + 15);
    endTime = new Date(endTime.getTime());
    state.work_records.set(state.lastUsedId + 1, {
      name: "TASK",
      start: {
        hour: startTime.getHours(),
        minute: startTime.getMinutes(),
      },
      end: {
        hour: endTime.getHours(),
        minute: endTime.getMinutes(),
      },
      total_time_spent_in_minutes: 15,
    });
    state.lastUsedId++;

    return state;
  });
}

export function addBreak() {
  const startTime = new Date();
  let endTime = new Date();
  endTime.setMinutes(startTime.getMinutes() + 15);
  endTime = new Date(endTime.getTime());
  globalState.update((state) => {
    state.work_records.set(state.lastUsedId + 1, {
      name: "PRZERWA",
      start: {
        hour: startTime.getHours(),
        minute: startTime.getMinutes(),
      },
      end: {
        hour: endTime.getHours(),
        minute: endTime.getMinutes(),
      },
      total_time_spent_in_minutes: 15,
    });
    state.lastUsedId++;

    return state;
  });
}
