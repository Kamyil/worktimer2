<script lang="ts">
	import MainView from './components/MainView.svelte';
</script>

<div class="app">
	<MainView />
</div>

<style>
	/* @media (prefers-color-scheme: dark) {
		.app {
			background-color: black;
			color: white;
		}
	}

	@media (prefers-color-scheme: light) {
		.app {
			background-color: white;
			color: #202020;
		}
	} */
	/* Tailwind doesn't allow to set width and height to 100%, so we need to add them here */
	.app {
		width: 100%;
		height: 100vh;
		background-color: #101010;
	}
</style>
