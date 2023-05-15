<script lang="ts">
  export let title: string;
  export let openedByDefault: boolean = false;
</script>

<div class="collapse-arrow rounded-box collapse w-full bg-base-100 shadow-2xl">
  <input type="checkbox" class="peer" checked={openedByDefault} />
  <div class="collapse-title">
    <h1>{title}</h1>
  </div>
  <div class="collapse-content">
    <slot />
  </div>
</div>
