<script>
	import ArrowBack from "../../../lib/arrowBack.svelte";
	import DefaultButton from "$lib/defaultButton.svelte";

	const gameSize = 81;
	let tabBlocks = [];
	let minesLoc = SetMinesLoc();

	for (let i = 1; i <= gameSize; i++) {
		tabBlocks.push(i);
	}

	function SetMinesLoc() {
		let memo = [];
		for (let i = 0; i < 10; i++) {
			let n = Math.ceil(Math.random() * gameSize);
			while (memo.includes(n)) {
				n = Math.ceil(Math.random() * gameSize);
			}
			memo.push(n);
		}
		return memo;
	}

	function chooseAction(blockId) {
		// console.log("button : ", minesLoc);
		if (minesLoc.includes(blockId)) {
			// GameOver(mines);
			console.log("Game Over");
		} else {
			// ShowCase(blockId, mines);
			console.log("case ", blockId, "liste des mines :", minesLoc);
		}
	}
</script>

<main class="flex flex-col items-center gap-2">
	<ArrowBack link="/games" />
	<h1>Minesweeper game</h1>
	<div
		id="minesweeper"
		class="grid grid-rows-9 grid-cols-9 gap-2 max-w-[95vw] max-h-[80vh] w-[80vh]"
	>
		{#each tabBlocks as block}
			<button on:click={() => chooseAction(block)}>
				<svg id={`${block}`} class="bg-grey" viewBox="-25 -25 50 50" />
			</button>
		{/each}
	</div>
	<DefaultButton label="restart" />
</main>
