<script>
  import MagGlass from '@/icons/MagGlass.svelte';
  import { formToData } from '$lib/formToData';
  function search(data) {
    data = formToData(data);

    console.log(data);
  }
</script>

<form class="searchBar" on:submit|preventDefault={search}>
  <label class="searchBar">
    <MagGlass class="magGlass" />
    <input
      name="search"
      type="text"
      spellcheck="false"
      autocorrect="off"
      autocomplete="off"
      placeholder="Search"
    />
  </label>
</form>

<style lang="scss">
  .searchBar {
    display: flex;
    background-color: $secondary;
    border-radius: 0.5rem;
    margin-left: 0.5rem;
    height: 2.5rem;
    width: 10rem;
    transition: width 200ms ease-in-out;
  }

  .searchBar:hover {
    background-color: hsl(260, 11%, 20%);
  }

  .searchBar:focus-within {
    width: 18rem;
  }

  .searchBar input {
    background-color: transparent;
    border: none;
    margin-left: 1rem;
    color: $text;
    font-size: 1.25rem;
    font-weight: 500; // medium
    padding: 0.5rem 0;
    width: calc(99% - 1rem);
  }

  .searchBar input::placeholder {
    color: hsl(260, 11%, 30%);
    font-weight: 600; // semibold
    user-select: none;
  }

  .searchBar input:focus {
    outline: none;
  }

  :global(.magGlass) {
    color: #474255;
    margin-left: 0.5rem;
    height: 2.5rem;
    width: 1.5rem;
  }
</style>
