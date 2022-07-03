<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { user } from '$lib/stores/user';
  import Loading from '@/Loading.svelte';
  import Header from '@/Header.svelte';
  import Avatar from '@/users/Avatar.svelte'
  import Home from '@/icons/Home.svelte';
  import Following from '@/icons/Following.svelte';
  import Messages from '@/icons/Messages.svelte';
  import Liked from '@/icons/Liked.svelte';
  import More from '@/icons/More.svelte';

  let isLoading = true;

  onMount(() => {
    isLoading = false;
  });
</script>

{#if isLoading}
  <Loading />
{:else}
  <div class="container">
    <div class="grid">
      <Header class="header" />
      <div class="left">
        {#if typeof $page.routeId === undefined}
          {#if $page.routeId.includes("user")}
            <Avatar />
          {:else}
            <Avatar user={$user}/>
          {/if}
        {:else}
          <Avatar user={$user} />
        {/if}
        <nav class="nav">
          <ul>
            <li>
              <a class="btn" class:active={$page.routeId === 'home'} href="/home">
                <span>
                  Home
                </span>
                <Home class="icon" />
              </a>
            </li>
            <li>
              <a class="btn" class:active={$page.routeId === 'followings'} href="/followings">
                <span>
                  Following
                </span>
                <Following class="icon" />
              </a>
            </li>
            <li>
              <a class="btn" class:active={$page.routeId === 'messages'} href="/messages">
                <span>
                  Messages
                </span>
                <Messages class="icon" />
              </a>
            </li>
            <li>
              <a class="btn" class:active={$page.routeId === 'liked'} href="/liked">
                <span>
                  Liked
                </span>
                <Liked class="icon" />
              </a>
            </li>
            <li>
              <div class="btn" style="cursor: pointer;">
                <span>
                  More
                </span>
                <More class="icon" />
              </div>
            </li>
          </ul>
        <nav>
      </div>
      <main>
        <slot />
      </main>
      <div class="right">
        <div class="blog-container">

        </div>
        <div class="featuredArtists-container">

        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .container {
    margin: 1% 5% 0 5%;
  }

  // MOBILE PART TO BE MADE

  @media (min-width: 768px) {
    .container {
      margin: 1% 12% 0 12%;
    }
    
    .grid {
      display: grid;
      grid-template-columns: 1fr 2.25fr 1fr;
      grid-gap: 1rem 1em;
      margin-top: 1rem;
    }

    :global(.header) {
      grid-column: 1 / 4;
      grid-row: 1;
    }

    .left {
      margin-left: auto;
      margin-right: 0;
    }

    .btn {
      display: flex;
      font-size: 1.25rem;
      color: #8a80a3;
      float: right;
      font-weight: 600; // semibold
      padding: 0.5rem;
      margin: 0.5rem 0 0.5rem 0;
      transition: color 100ms linear;
      user-select: none;
    }

    .btn:hover {
      color: $purple;
    }

    .btn:active {
      color: $purple;
    }

    :global(.icon) {
      margin-left: 1rem;
      height: 1.4rem;
      width: 1.4rem;
    }

    :global(.active) {
      color: $purple !important;
    }

    .blog-container {
      width: 100%;
      height: 14rem;
      background-color: $secondary;
      border-radius: 0.5rem;
    }

    .featuredArtists-container {
      margin-top: 1rem;
      width: 100%;
      height: 5rem;
      background-color: $secondary;
      border-radius: 0.5rem;
    }
  }
</style>
