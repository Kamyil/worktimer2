import { c as create_ssr_component, e as escape, b as subscribe, d as each, f as add_attribute, v as validate_component } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
const globalState = writable({
  lastUsedId: 3,
  work_records: /* @__PURE__ */ new Map([
    [1, { start: { hour: 10, minute: 0 }, end: { hour: 11, minute: 0 }, total_time_spent_in_minutes: 60, name: "Good morning :)" }]
  ])
});
function convertMinutesToHoursAndMinutes(minutes) {
  if (minutes >= 60) {
    let hours = Math.floor(minutes / 60);
    let restOfTheMinutes = minutes % 60;
    return {
      hours: hours < 10 ? "0" + hours : String(hours),
      minutes: restOfTheMinutes < 10 ? "0" + restOfTheMinutes : String(restOfTheMinutes)
    };
  } else {
    return {
      hours: "0",
      minutes: String(minutes)
    };
  }
}
const Collapse = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { openedByDefault = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.openedByDefault === void 0 && $$bindings.openedByDefault && openedByDefault !== void 0)
    $$bindings.openedByDefault(openedByDefault);
  return `<div class="${"collapse shadow-2xl w-full collapse-arrow bg-base-100 rounded-box"}"><input type="${"checkbox"}" class="${"peer"}" ${openedByDefault ? "checked" : ""}> 
  <div class="${"collapse-title"}"><h1>${escape(title)}</h1></div>
  <div class="${"collapse-content"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const EditableWorkRecords = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $globalState, $$unsubscribe_globalState;
  $$unsubscribe_globalState = subscribe(globalState, (value) => $globalState = value);
  $$unsubscribe_globalState();
  return `<div class="${"overflow-y-auto max-h-[600px]"}"><table class="${"table table-zebra w-full"}"><thead><tr><th></th>
        <th class="${"text-center"}">Task</th>
        <th class="${"text-center"}">Start</th>
        <th class="${"text-center"}">Koniec</th>
        <th class="${"text-center"}">Spędzony czas</th>
        <th class="${"text-center"}"></th></tr></thead>
    <tbody class="${"h-full mt-52 overflow-y-auto"}">${each([...$globalState.work_records], ([id, workRecord]) => {
    return `<tr><td></td>
          <td class="${"w-fit"}"><input class="${"w-full input-bordered input input-md text-center"}" type="${"text"}" name="${"work_name"}" id="${"work_name"}"${add_attribute("value", workRecord.name, 0)}></td>
          <td class="${"w-fit"}"><div class="${"w-full text-center"}"><input class="${"input-bordered input input-md w-20 text-center"}" type="${"number"}"${add_attribute("name", `${id}-start-hour`, 0)}${add_attribute("id", `${id}-start-hour`, 0)} min="${"0"}" max="${"23"}"${add_attribute("value", workRecord.start.hour, 0)}>
            :
            <input class="${"input-bordered input input-md w-20 text-center"}" type="${"number"}"${add_attribute("name", `${id}-start-minute`, 0)}${add_attribute("id", `${id}-start-minute`, 0)} min="${"0"}" max="${"59"}"${add_attribute("value", workRecord.start.minute, 0)}>
          </div></td>
          <td class="${"w-fit"}"><div class="${"w-full text-center"}"><input class="${"input-bordered input input-md w-20 text-center"}" type="${"number"}"${add_attribute("name", `${id}-end-hour`, 0)}${add_attribute("id", `${id}-end-hour`, 0)} min="${"0"}" max="${"23"}"${add_attribute("value", workRecord.end.hour, 0)}>
            :
            <input class="${"input-bordered input input-md w-20 text-center"}" type="${"number"}"${add_attribute("name", `${id}-end-minute`, 0)}${add_attribute("id", `${id}-end-minute`, 0)} min="${"0"}" max="${"59"}"${add_attribute("value", workRecord.end.minute, 0)}>
          </div></td>
          <td class="${"text-center text-white"}">${workRecord.total_time_spent_in_minutes >= 60 ? (() => {
      let { hours, minutes } = convertMinutesToHoursAndMinutes(workRecord.total_time_spent_in_minutes);
      return `

              ${escape(hours)}h ${escape(minutes)}m`;
    })() : `${escape(workRecord.total_time_spent_in_minutes)}m`}</td>
          <td><button class="${"btn-outline btn-xs btn"}">USUŃ</button></td>
        </tr>`;
  })}</tbody>
    </table></div>`;
});
const StateImportExport = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_globalState;
  $$unsubscribe_globalState = subscribe(globalState, (value) => value);
  $$unsubscribe_globalState();
  return `<label for="${"import-state-data"}" class="${"btn-outline btn-sm btn"}">Import danych
    <input type="${"file"}" name="${""}" class="${"hidden"}" id="${"import-state-data"}"></label>
  <button class="${"btn-outline btn-sm btn"}">Export danych</button>`;
});
const Options = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col"}"><div class="${"shadow m-2"}">${validate_component(StateImportExport, "StateImportExport").$$render($$result, {}, {}, {})}
      <button class="${"btn-outline btn-sm btn"}">Zapisz do local storage</button>
      <button class="${"btn-outline btn-sm btn"}">Wczytaj z local storage</button></div></div>`;
});
const SummedWorkRecords = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let summedWorkRecords;
  let $globalState, $$unsubscribe_globalState;
  $$unsubscribe_globalState = subscribe(globalState, (value) => $globalState = value);
  summedWorkRecords = [...$globalState.work_records.values()].reduce(
    (acc, record) => {
      const { name, total_time_spent_in_minutes } = record;
      if (acc.has(name)) {
        const existingEntry = acc.get(name);
        existingEntry.total_time_spent_in_minutes += total_time_spent_in_minutes;
      } else {
        acc.set(name, { name, total_time_spent_in_minutes });
      }
      return acc;
    },
    /* @__PURE__ */ new Map()
  );
  $$unsubscribe_globalState();
  return `<div class="${"overflow-y-auto min-h-96"}"><table class="${"table-compact table"}"><thead><th class="${"text-center"}">TASK</th>
      <th>CZAS ZSUMOWANY</th></thead>
    <tbody>${each([...summedWorkRecords], ([id, workRecord]) => {
    return `<tr><td class="${"text-center"}">${escape(workRecord.name)}</td>
          <td class="${"text-center"}">${workRecord.total_time_spent_in_minutes >= 60 ? (() => {
      let { hours, minutes } = convertMinutesToHoursAndMinutes(workRecord.total_time_spent_in_minutes);
      return `

              ${escape(hours)}h ${escape(minutes)}m`;
    })() : `${escape(workRecord.total_time_spent_in_minutes)}m`}</td>
        </tr>`;
  })}</tbody></table></div>`;
});
const MainView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalHoursAndMinutes;
  let $globalState, $$unsubscribe_globalState;
  $$unsubscribe_globalState = subscribe(globalState, (value) => $globalState = value);
  totalHoursAndMinutes = () => {
    let totalMinutes = 0;
    $globalState.work_records.forEach(({ total_time_spent_in_minutes }) => {
      totalMinutes += total_time_spent_in_minutes;
    });
    let { hours, minutes } = convertMinutesToHoursAndMinutes(totalMinutes);
    return `${hours}h ${minutes}m`;
  };
  $$unsubscribe_globalState();
  return `<div class="${"mainview flex h-fit w-full items-center justify-center"}"><div class="${"mockup-window border border-zinc-900"}">${validate_component(Options, "Options").$$render($$result, {}, {}, {})}

  <div class="${"flex flex-row-reverse"}"><div class="${"w-3/12"}">${validate_component(Collapse, "Collapse").$$render($$result, { openedByDefault: true, title: "GRUPY" }, {}, {
    default: () => {
      return `${validate_component(SummedWorkRecords, "SummedWorkRecords").$$render($$result, {}, {}, {})}`;
    }
  })}</div>

    
    <div class="${"w-9/12"}">${validate_component(Collapse, "Collapse").$$render(
    $$result,
    {
      openedByDefault: true,
      title: "POJEDYNCZE"
    },
    {},
    {
      default: () => {
        return `${validate_component(EditableWorkRecords, "EditableWorkRecords").$$render($$result, {}, {}, {})}
        <div class="${"stats w-full shadow"}"><div class="${"stat flex flex-col items-end"}"><div class="${"stat-title"}">ŁĄCZNIE</div>
            <div class="${"stat-value"}">${escape(totalHoursAndMinutes())}</div>
            </div></div>
        <div class="${"m-2 flex justify-end"}"><button class="${"btn-outline btn-sm btn mx-2"}">
            Dodaj wpis
          </button>

          <button class="${"btn-outline btn-sm btn"}">
            Dodaj przerwę
          </button></div>`;
      }
    }
  )}</div></div></div></div>`;
});
const App_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-1ujs6t1{width:100%;height:100vh;background-color:#101010}",
  map: null
};
const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"app svelte-1ujs6t1"}">${validate_component(MainView, "MainView").$$render($$result, {}, {}, {})}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-ljkqf0_START -->${$$result.title = `<title>WorkTimer2</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}"><!-- HEAD_svelte-ljkqf0_END -->`, ""}

${validate_component(App, "App").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
