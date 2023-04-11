<script>
	import ArrowBack from "../../../lib/arrowBack.svelte";
	import DefaultButton from "$lib/defaultButton.svelte";

	const gameSize = 81;

	let tabBlocks = [];

	for (let i = 1; i <= gameSize; i++) {
		tabBlocks.push(i);
	}

	// export let data;
</script>

<main class="flex flex-col items-center gap-2">
	<ArrowBack link="/games" />
	<h1>Minesweeper game</h1>
	<div
		id="minesweeper"
		class="grid grid-rows-9 grid-cols-9 gap-2 max-w-[95vw] max-h-[80vh] w-[80vh]"
	>
		{#each tabBlocks as block}
			<svg id={`${block}`} class="bg-grey" viewBox="-25 -25 50 50" />
		{/each}
	</div>
	<DefaultButton label="restart" />
</main>
