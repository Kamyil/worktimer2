<script lang="ts">
  import { globalState } from "$lib/globalState";
  import { replacer, reviver } from "$lib/jsonTools";
  import { getDate } from "date-fns";

  function download(content: string, fileName: string, contentType: string) {
    const htmlAnchorElement = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    htmlAnchorElement.href = URL.createObjectURL(file);
    htmlAnchorElement.download = fileName;
    htmlAnchorElement.click();
  }

  function exportStateToFile() {
    download(
      JSON.stringify($globalState, replacer),
      `czas-pracy-${new Date()}.txt`,
      "text/plain"
    );
  }

  async function handleStateFileUpload(event: Event) {
    const file = (event.target as HTMLInputElement)!.files![0];
    const fileContent = await new Blob([file]).text();
    const stateFromFile = JSON.parse(fileContent, reviver);
    console.log(stateFromFile);
    globalState.set(stateFromFile);
  }
</script>


  <label for="import-state-data" class="btn-outline btn-sm btn">
    Import danych
    <input
      type="file"
      name=""
      class="hidden"
      id="import-state-data"
      on:change={handleStateFileUpload}
    />
  </label>
  <button class="btn-outline btn-sm btn" on:click={exportStateToFile}>Export danych</button>

