<script>
	import { onMount } from 'svelte';
	import Loading from '../components/Loading.svelte';

	let isLoading = true;

	onMount(() => {
		isLoading = false;
	});
</script>

{#if isLoading}
	<Loading />
{:else}
	<slot />
{/if}

<style lang="scss"></style>
