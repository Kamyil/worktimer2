<script lang="ts">
  export let title: string;
  export let openedByDefault: boolean = false;
</script>

<div class="collapse shadow-2xl w-full collapse-arrow bg-base-100 rounded-box"
  >
  <input type="checkbox" class="peer" checked={openedByDefault} /> 
  <div class="collapse-title">
    <h1>{title}</h1>
  </div>
  <div class="collapse-content"> 
    <slot/>
  </div>
</div>