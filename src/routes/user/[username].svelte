<script>
  // FAKERJS IS A VERY LARGE PACKAGE AND SHOULDN'T BE DEPLOYED TO PRODUCTION, ONLY FOR TESTING PURPOSES.
  // IF THE /user/[username] PAGE TAKES TIME TO LOAD, IT'S A NORMAL BEHAVIOR BECAUSE OF THE SIZE OF FAKERJS.
  // THIS HAS TO BE USED SINCE THE API ISN'T READY YET.
  import { faker } from '@faker-js/faker';

  import { browser } from '$app/env';
  import { onMount, tick } from 'svelte';
  import { page } from '$app/stores';

  import Profile from '@/layout/interactionPanel/Profile.svelte';

  let user = {
    "id": faker.datatype.uuid(),
    "name": faker.name.firstName(),
    "username": $page.params.username,
    "bio": `${faker.name.jobArea()}: ${faker.name.jobTitle()} / ${faker.name.gender()} / Age of ${faker.datatype.number({min: 13, max: 99})}`,
    "avatar": faker.image.avatar(),
    "banner": null,
    "data": {
      "isUserFollowing": false,
      "following": faker.datatype.number(),
      "followers": faker.datatype.number(),
    }
  }

  $: {
    if(browser) {
      renderAvatar()
    };
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

<div class="container">
  <div class="top">
    <h1 class="name">{user.name}</h1>
    <p class="username">@{user.username}</p>
    <p class="bio">{user.bio}</p>
  </div>
  <div class="right">
    <div id="profileInteractionPanel" class="fixed">
      <Profile user={user} />
    </div>
</div>
</div>

<style lang="scss">
  .name {
    margin: 0;
    color: #FFFFFF;
    font-size: 2rem;
    font-weight: bold;
  }

  .username {
    margin: 0;;
    color: hsl(0, 0%, 68%);
  }

  .bio {
    margin-top: 0.5rem;
  }

  .right {
    display: none;
  }

  @media (min-width: 768px){
    .right {
      display: block;
      position: fixed;
      left: 70%;
      top: 5.1rem;
      width: 17rem;
    }
  }
</style>