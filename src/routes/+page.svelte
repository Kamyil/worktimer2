<script lang="ts">
  import { onMount } from "svelte";
  import App from "./App.svelte";

  onMount(() => {
    navigator.serviceWorker.register("/service-worker.js");
  });
</script>

<svelte:head>
  <title>WorkTimer2</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<App />
