<div class="blog-container">
  <h4 class="title">Latest from Puroto</h4>
  <div>
    Soon
  </div>
</div>

<div class="featuredArtists-container">
  <h4 class="title">Featured Artist</h4>
  <div>
    Soon
  </div> 
</div>

<style lang="scss">
  .blog-container {
    width: 17rem;
    height: 18rem;
    background-color: $secondary;
    border-radius: 0.5rem;
    transition: width 0.2s ease-in-out;
  }

  .featuredArtists-container {
    margin-top: 1rem;
    width: 17rem;
    height: 5rem;
    background-color: $secondary;
    border-radius: 0.5rem;
    transition: width 0.2s ease-in-out;
  }

  .title {
    font-weight: 600;
    color: $purple;
    margin: 0;
    padding: 0.5rem;
    font-weight: 600; // semibold
    user-select: none;
  }

  @media (max-width: 940px) {
    .blog-container {
    width: 14rem;
  }

  .featuredArtists-container {
    width: 14rem;
  }
  }
</style>