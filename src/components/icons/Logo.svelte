<script>
  import Icon from '@/icons/Icon.svelte';

  export let size = '2';
  export let color = 'white';
  export let icon_color = color;
  export let isClickable = true;

  let size_number = size.replace(/[^\d.-]/g, ''); // it removes everything that is not a number.
</script>

{#if isClickable}
<a class="container" href="/">
  <Icon style="margin-right:{size_number / 2}rem;" size="{size_number}rem" stroke={icon_color} />
  <span style="font-size: {size_number}rem; color: {color}; font-weight: 600;">Puroto</span>
</a>
{:else}
<div class="container">
    <Icon style="margin-right:{size_number / 2}rem;" size="{size_number}rem" stroke={icon_color} />
    <span style="font-size: {size_number}rem; color: {color}; font-weight: 600;">Puroto</span>
</div>
{/if}

<style lang="scss">
  .container {
    display: flex;
    align-items: center;
    user-select: none;
    padding: 0.5rem;
  }
</style>
