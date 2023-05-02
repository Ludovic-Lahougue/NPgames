<script>
	export let data;
	import ArrowBack from "$lib/arrowBack.svelte";
	import DefaultButton from "$lib/defaultButton.svelte";
	import { construct_svelte_component } from "svelte/internal";
	import { ShowCase } from "./showCase";
	import { page } from "$app/stores";

	let startTime = 0;
	let elapsedTime = 0;
	let score;

	const gameSize = 81;
	let tabBlocks = [];
	let minesLoc = SetMinesLoc();

	for (let i = 1; i <= gameSize; i++) {
		tabBlocks.push(i);
	}

	async function SaveScore() {
		let res = await fetch("/api/score/time", {
			method: "POST",
			body: JSON.stringify({
				player: data.userId,
				game: data.gameId,
				value: elapsedTime,
			}),
		});
		console.log("res fetch :", res);
	}

	const start = () => {
		startTime = Date.now();
		score = setInterval(() => {
			const endTime = Date.now();
			elapsedTime = endTime - startTime;
		});
	};

	const stop = (isWin) => {
		clearInterval(score);
		if (isWin) {
			console.log(`Congrat ${data.username} you win !`);
			SaveScore();
		}
	};

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
		// console.log(document.querySelectorAll(".bg-white").length);
		if (!document.getElementById(blockId).classList.contains("bg-white")) {
			if (minesLoc.includes(blockId)) {
				if (elapsedTime !== 0) {
					stop(false);
				}
				console.log("Game Over");
			} else {
				if (elapsedTime === 0) {
					start();
				}
				ShowCase(blockId, minesLoc, stop);
			}
		}
	}

	const restart = () => {
		stop(false);
		elapsedTime = 0;
		let blocksToRestart = document.querySelectorAll(".bg-white");
		blocksToRestart.forEach((element) => {
			element.innerHTML = "";
			element.classList.remove("bg-white");
			element.classList.add("bg-grey");
		});
		minesLoc = SetMinesLoc();
	};
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

	<DefaultButton label="restart" click={() => restart()} />

	<div>
		{elapsedTime.toString().slice(0, -3)},
		{elapsedTime.toString().slice(-3)}
	</div>
</main>
