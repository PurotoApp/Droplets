<script>
  // FAKERJS IS A VERY LARGE PACKAGE AND SHOULDN'T BE DEPLOYED TO PRODUCTION, ONLY FOR TESTING PURPOSES.
  // IF THE /user/[username] PAGE TAKES TIME TO LOAD, IT'S A NORMAL BEHAVIOR BECAUSE OF THE SIZE OF FAKERJS.
  // THIS HAS TO BE USED SINCE THE API ISN'T READY YET.
  import { faker } from '@faker-js/faker';

  import { tick } from 'svelte';
  import { page } from '$app/stores';

  let user = {
    "id": faker.datatype.uuid(),
    "name": faker.name.firstName(),
    "username": $page.params.username,
    "bio": `${faker.name.jobArea()}: ${faker.name.jobTitle()} / ${faker.name.gender()} / Age of ${faker.datatype.number({min: 13, max: 99})}`,
    "avatar": faker.image.avatar(),
    "banner": null,
    "hasNotifications": false
  }

  $: {
    renderAvatar();
  }

  async function renderAvatar() {
    await tick();
    let profilePicture = document.getElementById("avatar");
    profilePicture.style.backgroundImage = `url(${user.avatar})`;
  }

</script>

<svelte:head>
  <title>Puroto - {$page.params.username}</title>
  <meta name="description" content={user.bio} />
</svelte:head>