<script>
  import { goto } from '$app/navigation';

  export let user = null;
  export let size = "6rem";
</script>

{#if user != null}
  {#if typeof user.avatar == "string"}
  <div class="avatar" style="width:{size};height:{size};border-radius:0.5rem;background:url({user.avatar});background-size:cover;background-position:center;background-repeat:no-repeat;margin-left:auto;margin-right:0;cursor:pointer;" on:click={()=>{goto(`/user/${user.username}`)}}/>
  {:else}
  <div class="avatar" style="width:{size};height:{size};border-radius:0.5rem;background-color:#26232C;margin-left:auto;margin-right:0;" />
  {/if}
{:else}
  <div class="avatar" style="width:{size};height:{size};border-radius:0.5rem;background-color:#26232C;margin-left:auto;margin-right:0;" />
{/if}