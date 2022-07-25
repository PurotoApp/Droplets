<script>
  import Flag from '@/icons/Flag.svelte';

  export let user;
</script>

<div class="interact">
  <div class="btn">
    <span>
      Follow
    </span>
  </div>
  <div class="btn">
    <span>
      Message
    </span>
  </div>
  <div class="btn">
    <span>
      <Flag />
    </span>
  </div>
</div>
<div>
  <div>
    <h4 class="followText">Following</h4>
    <p class="followVal">{user.data["following:"]}</p>
  </div>
  <div>
    <h4 class="followText">Followers</h4>
    <p class="followVal">{user.data["followers:"]}</p>
  </div>
</div>
<style lang="scss">
  .interact {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .btn {
    display: flex;
    height: 1.5rem;
    align-items: center;
    padding: 0.5rem 1.4rem 0.5rem 1.4rem;
    background: $button;
    border-radius: 0.5rem;
    user-select: none;
  }

  .followText {
    font-size: 1.5rem;
    margin: 0;
  }

  .followVal {
    font-size: 1rem;
    font-weight: bold;
    margin: 0 auto 1rem auto;
  }

  @media (max-width: 940px) {
    .interact {
      width: 70%;
    }

    .btn {
      padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    }
  }
</style>