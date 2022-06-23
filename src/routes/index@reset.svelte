<script>
  import Icon from '@/icons/Icon.svelte';
  import Twitter from '@/icons/Twitter.svelte';
  import Discord from '@/icons/Discord.svelte';

  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<svelte:head>
  <title>Puroto - We are building the fluffiest social network</title>
  <meta name="description" content="We are building the fluffiest social network" />
</svelte:head>

<main class="landing">
  <header class="head">
    <a class="logo" href="/">
      <Icon size="1.75rem" stroke="#878CFB" />
      <span>Puroto</span>
    </a>
    <div class="hamburger">
      <svg on:click={toggleMenu}
        class="icon"
        width="24"
        height="24"
        viewBox="0 0 32 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="black">
          <path style="fill:#FFF;" d="M0 0H32V3H0V0Z" />
          <path style="fill:#FFF;" d="M0 12H32V15H0V12Z" />
          <path style="fill:#FFF;" d="M0 24H32V27H0V24Z" />
        </g>
      </svg>
      {#if menuOpen}
        <div class="container">
          <div class="menu">
            <a class="patreon" href="/#">Support Us</a> <!-- THIS NEEDS FIXES, IT DOESN'T WORK AS INTENDED -->
            <a class="join" href="/#">Apply</a>
          </div>
        </div>
      {/if}
    </div>
    <div class="grouplink">
      <a class="patreon" rel="noopener" target="_blank" href="/#">
        Support Us
      </a>
      <a class="join" href="/#">
        Apply
      </a>
    </div>
  </header>
  <div class="body">
    <div class="intro">
      <div class="intro-text">
        <h1>We are building the fluffiest social network.</h1>
      </div>
      <div class="ext-links">
        <a class="link github" rel="noopener" target="_blank" href="/#">
          <div class="desk">
            <img src="/Github.png" style="width:2rem;height:2rem;" alt="Github" />
          </div>
          <div class="mobile">
            <img src="/Github.png" style="width:1.5rem;height:1.5rem;" alt="Github" />
          </div>
          <span class="github">Github</span>
        </a>
        <a class="link twitter" rel="noopener" target="_blank" href="/#">
          <div class="desk">
            <Twitter size="2rem" />
          </div>
          <div class="mobile">
            <Twitter size="1.5rem" />
          </div>
          <span class="twitter">Twitter</span>
        </a>
        <a class="link discord" rel="noopener" target="_blank" href="/#">
          <div class="desk">
            <Discord size="2rem" />
          </div>
          <div class="mobile">
            <Discord size="1.5rem" />
          </div>
          <span class="discord">Discord</span>
        </a>
      </div>
    </div>
  </div>
</main>

<style lang="scss">
  .landing {
    margin: 1% 5% 0 5%;
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;

    .logo {
      display: flex;
      align-items: center;
      text-decoration: none;
      user-select: none;
      padding: 0.5rem;

      :global(svg) {
        margin-right: 1rem;
      }

      :global(span) {
        color: #878CFB;
        font-weight: 600; // semibold
        font-size: 1.75rem;
      }
    }

    .hamburger {
      cursor: pointer;
      padding: 0.5rem;
      user-select: none;

      .container {
        position: absolute;
        transform: translateX(-75%);
        background-color: $secondary;
        border-radius: 0.5rem;
        padding: 0.5rem;
        width: 50%;

        .patreon {
          margin-right: 5rem;
          color: #FF5A96;
          font-weight: 600; // semibold
          font-size: 1rem;
          text-decoration: none;
        }

        .join {
          color: #878CFB;
          font-weight: 600; // semibold
          font-size: 1rem;
          text-decoration: none;
        }
      }
    }

    .grouplink {
      display: none;
    }
  }

  .body {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    padding: -0.5rem;

    .intro-text {
      width: 70%;
      font-size: 1rem;
      color: #8799FB;
    }

    .ext-links {
      display: flex;
      justify-content: space-between;
      width: 60%;
      margin-top: 4rem;
      color: #9CABDF;

      .link {
        color: #9CABDF;
        font-weight: 600; // semibold
        font-size: 1rem;
        display: flex;
        margin-right: 1.5rem;
        user-select: none;
        text-decoration: none;

        .desk {
          display: none;
        }

        :global(span) {
          margin-left: 0.5rem;
        }


        .github {
          color: #FFF;
        }

        .twitter {
          color: #1D9BF0;
        }

        .discord {
          color: #5865F2;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .landing {
      margin: 1% 10% 0 10%;
    }

    .head {
      padding: 0.5rem;

      .logo {
        :global(svg) {
          margin-right: 1rem;
        }

        :global(span) {
          font-weight: 600; // semibold
          font-size: 1.75rem;
        }
      }

      .hamburger {
        display: none;
      }

      .grouplink {
        display: flex;
        user-select: none;

        .patreon {
          margin-right: 5rem;
          color: #FF5A96;
          font-weight: 600; // semibold
          font-size: 1.5rem;
          text-decoration: none;
          padding: 1rem;
        }

        .join {
          color: #878CFB;
          font-weight: 600; // semibold
          font-size: 1.5rem;
          text-decoration: none;
          padding: 1rem;
        }
      }
    }

    .body {
      margin-top: 7rem;
      padding: -0.5rem;

      .intro-text {
        width: 70%;
        font-size: 1.5rem;
      }

      .ext-links {
        width: 60%;
        margin-top: 4rem;

        .link {
          font-weight: 600; // semibold
          font-size: 1.5rem;
          margin-right: 1rem;

          .desk {
            display: inline;
          }

          .mobile {
            display: none;
          }

          :global(span) {
            margin-left: 1rem;
          }
        }
      }
    }
  }
</style>