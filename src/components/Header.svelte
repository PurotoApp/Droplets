<script>
  import Logo from '@/icons/Logo.svelte';
  import SearchBar from '@/SearchBar.svelte';
  import { goto } from '$app/navigation';

  export let user;

  if(user == null) {
    user = {
      username: null,
      avatar: null,
      hasNotification: false
    }
  }

  console.log(user)
</script>

<header class={$$props.class}>
  <Logo size="1.75" />
  
  <div class="user-interaction">
    <SearchBar />
    <div on:click={()=>{goto(`/user/${user.username}`)}} class="avatar" style:background-image={user == null ? "" : `url(${user.avatar})`}>
      {#if user.hasNotification}
        <div class="notification" />
      {/if}
    </div> 
    <div class="element"/>
  </div>
</header>

<style lang="scss">
  :global(Header) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .user-interaction {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .avatar, .element {
    background-color: $secondary;
    border-radius: 0.5rem;
    margin-left: 0.5rem;
    height: 2.5rem;
    width: 2.5rem;
  }

  .avatar {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .notification, .blink {
    width: 1rem;
    height: 1rem;
    background-color: $red;
    border-radius: 40%;
  }

  .notification {
    position: relative;
    bottom: 0.3rem;
    left: 1.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    animation: blink 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>