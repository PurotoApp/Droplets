<script>
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

  import { tick } from 'svelte';
  import { page } from '$app/stores';

  console.log($page.params.username);

  let user = {
    "id": null,
    "name": null,
    "username": null,
    "avatar": null,
    "banner": null,
    "hasNotifications": false
  }

  $: {
    renderAvatar($page.params.username);
  }

  async function renderAvatar(routeId) {
    await tick();
    let profilePicture = document.getElementById("avatar");
    profilePicture.style.backgroundImage = `url(${faker.image.avatar()})`;
  }

</script>

<svelte:head>
  <title>Puroto - {$page.params.username}</title>
</svelte:head>