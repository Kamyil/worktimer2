<script lang="ts">
  export let title: string;
  export let openedByDefault: boolean = false;
</script>

<div class="collapse shadow-2xl collapse-arrow bg-base-100 rounded-box">
  <input type="checkbox" class="peer" /> 
  <div class="collapse-title">
    {title}
  </div>
  <div class="collapse-content"> 
    <slot/>
  </div>
</div>