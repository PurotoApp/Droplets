<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        status: status,
        message: error.message
      }
    };
  }
</script>

<script>
  export let status;
  export let message;
</script>

<main class="errorHandler">
  <h1>{status}</h1>
  <p>{message}</p>
</main>

<style lang="scss">
  .errorHandler {
    text-align: center;
    margin-top: 2rem;
  }
</style>
