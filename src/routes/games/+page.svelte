<script>
	import NavBar from "../../lib/navBar.svelte";
	import Title from "../../lib/title.svelte";
	import "../../styles/games.css"

	export let data;
</script>

<main>
	<Title />

	<a href="/games/new">New game</a>
	{#if data.games.length > 0}
		<div class="game-list">
			{#each data.games as game}
				<div class="card">
						<p class="card-category">{game.category}</p>
						{#if game.image != null}
							<div class="card-image">
								<img src={game.image} alt={game.name} />
							</div>
						{/if}
						<div class="card-body">
							<h3 class="card-title">{game.name}</h3>
							<div class="card-content">
								<p>{game.description || ''}</p>
								<a href="/games/{game.url}" class="btn">PLAY</a>
								<br>
								<a href="/games/edit/{game.id}">Éditer</a>
							</div>
						</div>
				</div>
			{/each}
		</div>
	{/if}
	<NavBar />
</main>
