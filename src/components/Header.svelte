<script>
  import Logo from '@/icons/Logo.svelte';
  import SearchBar from '@/SearchBar.svelte';
</script>

<header class={$$props.class}>
  <Logo size="1.75" />
  
  <div class="user-interaction">
    <SearchBar />
    <div class="element"/>
    <div class="element"/>
  </div>
</header>

<style lang="scss">

  @media (min-width: 768px) {
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
  
    .element {
      background-color: $secondary;
      border-radius: 0.5rem;
      margin-left: 0.5rem;
      height: 2.5rem;
      width: 2.5rem;
    }
  }
</style>