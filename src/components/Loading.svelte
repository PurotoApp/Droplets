<script>
  import Icon from './icons/Icon.svelte';
</script>

<div class="bg">
  <div class="icon">
    <Icon size="6rem" stroke="purple" />
  </div>
</div>

<style lang="scss">
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    background: $primary;
    z-index: -1;
  }
  .icon {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0;
    animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>
