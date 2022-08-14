<script>
  import { browser } from '$app/env';
  import { onMount, tick } from 'svelte';
  import { page } from '$app/stores';
  import { user } from '$lib/stores/user';
  import { goto } from '$app/navigation';
  import Loading from '@/Loading.svelte';
  import Header from '@/Header.svelte';
  import Avatar from '@/users/Avatar.svelte';
  import Home from '@/icons/Home.svelte';
  import Following from '@/icons/Following.svelte';
  import Messages from '@/icons/Messages.svelte';
  import Liked from '@/icons/Liked.svelte';
  import More from '@/icons/More.svelte';
  import Default from '@/layout/interactionPanel/Default.svelte';

  let isLoading = true;

  onMount(async () => {
    isLoading = false;
  });

  $: {
    if (browser) {
      renderAvatar($page.routeId);
    }
  }

  async function renderAvatar(routeId) {
    await tick();
    let profilePicture = document.getElementById('avatar');

    if (!routeId.includes('user')) {
      profilePicture.style.backgroundImage = `url(${$user.avatar})`;
    }
  }
</script>

{#if isLoading}
  <main>
    <Loading />
    <div class="invisible">
      <slot />
    </div>
  </main>
{:else}
  <div class="container">
    <!-- DESKTOP -->
    <div class="grid">
      <Header class="header" user={$user} />
      <div class="left">
        <div class="fixed">
          <div
            on:click={goto(
              `/user/${!$page.routeId.includes('user') ? $user.username : $page.params.username}`
            )}
          >
            <Avatar />
          </div>
          <nav>
            <ul>
              <li>
                <a
                  class="btn"
                  class:active={$page.routeId === 'home'}
                  href="/home"
                  aria-label="Home"
                >
                  <span> Home </span>
                  <Home class="icon" />
                </a>
              </li>
              <li>
                <a
                  class="btn"
                  class:active={$page.routeId === 'followings'}
                  href="/followings"
                  aria-label="Following"
                >
                  <span> Following </span>
                  <Following class="icon" />
                </a>
              </li>
              <li>
                <a
                  class="btn"
                  class:active={$page.routeId === 'messages'}
                  href="/messages"
                  aria-label="Messages"
                >
                  <span> Messages </span>
                  <Messages class="icon" />
                </a>
              </li>
              <li>
                <a
                  class="btn"
                  class:active={$page.routeId === 'liked'}
                  href="/liked"
                  aria-label="Liked"
                >
                  <span> Liked </span>
                  <Liked class="icon" />
                </a>
              </li>
              <li>
                <div class="btn" style="cursor: pointer;">
                  <span> More </span>
                  <More class="icon" />
                </div>
              </li>
            </ul>
            <nav />
          </nav>
        </div>
      </div>
      <main>
        <slot />
      </main>
      {#if !$page.routeId.includes('user')}
        <div class="right">
          <div id="interactionPanel" class="fixed">
            <Default />
          </div>
        </div>
      {/if}
    </div>

    <!-- MOBILE -->
    <div class="screen">
      <nav class="nav fixed">
        <ul class="list">
          <li>
            <a class="btn" class:active={$page.routeId === 'home'} href="/home" aria-label="Home">
              <Home class="icon" />
            </a>
          </li>
          <li>
            <a
              class="btn"
              class:active={$page.routeId === 'followings'}
              href="/followings"
              aria-label="Following"
            >
              <Following class="icon" />
            </a>
          </li>
          <li>
            <Avatar size="2.5rem" />
          </li>
          <li>
            <a
              class="btn"
              class:active={$page.routeId === 'messages'}
              href="/messages"
              aria-label="Messages"
            >
              <Messages class="icon" />
            </a>
          </li>
          <li>
            <a
              class="btn"
              class:active={$page.routeId === 'liked'}
              href="/liked"
              aria-label="Liked"
            >
              <Liked class="icon" />
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <slot />
      </main>
    </div>
  </div>
{/if}

<style lang="scss">
  .invisible {
    display: none;
  }

  .container {
    margin: 1% 5% 0 5%;
  }

  .grid {
    display: none;
  }

  .nav {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    background-color: #26232c;
  }

  .list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 100%;
    padding: 0;
    margin: 0 auto 0 auto;
  }

  .btn {
    user-select: none;
    transition: color 100ms linear;
  }

  .btn:hover {
    color: $purple;
  }

  .btn:active {
    color: $purple;
  }

  :global(.icon) {
    height: 1.5rem;
    width: 1.5rem;
  }

  :global(.active) {
    color: $purple !important;
  }

  :global(.avatar) {
    border-radius: 100%;
  }

  .fixed {
    position: fixed;
  }

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

    .screen {
      display: none;
    }

    .left {
      position: relative;
      right: 12rem;
      margin-left: auto;
      margin-right: 0;
    }

    .right {
      position: relative;
      max-width: 14rem;
      margin-left: 0;
      margin-right: auto;
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

    :global(main) {
      grid-column: 2 / 3;
      grid-row: 2;
    }
  }
</style>
