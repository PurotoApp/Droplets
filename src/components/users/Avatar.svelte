<script>
  import { goto } from '$app/navigation';

  export let user = null;
  export let size = "6rem";
</script>

{#if user != null}
  {#if typeof user.avatar == "string"}
  <div class={$$props.class} style="width:{size};height:{size};background:url({user.avatar});background-size:cover;background-position:center;background-repeat:no-repeat;margin-left:auto;margin-right:0;cursor:pointer;" on:click={()=>{goto(`/user/${user.username}`)}}/>
  {:else}
  <div class={$$props.class} style="width:{size};height:{size};background-color:#26232C;margin-left:auto;margin-right:0;" />
  {/if}
{:else}
  <div class={$$props.class} style="width:{size};height:{size};background-color:#26232C;margin-left:auto;margin-right:0;" />
{/if}

<style lang="scss">
  :global(div) {
    border-radius:0.5rem;
  }
</style>