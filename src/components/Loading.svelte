<script>
	import Icon from './Icon.svelte';
</script>

<div class="bg">
	<div class="icon">
		<Icon size="6rem" stroke="purple" />
	</div>
</div>
<div class="invisible">
	<slot />
</div>

<style lang="scss">
	.bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: $primary;
		z-index: -1;

		.icon {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
		}
	}

	.invisible {
		opacity: 0;
	}
</style>
