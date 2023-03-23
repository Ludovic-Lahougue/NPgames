<script>
	import NavBar from "../../lib/navBar.svelte";
	import Title from "../../lib/title.svelte";

	export let data;
</script>

<main>
	<Title />

	<a href="/games/new">Nouveau jeu</a>
	{#if data.games.length > 0}
		<h3>Liste des jeux</h3>
		<ul>
			{#each data.games as game}
				<li>
					<h3>
						{game.name} <a href="/games/edit/{game.id}">Éditer</a>
					</h3>
					{#if game.image != null}
						<img
							src={game.image}
							alt={game.name}
							width="100"
							height="100"
						/>
					{/if}
					<p>Catégorie : {game.category}</p>
					<p>{game.description}</p>
				</li>
			{/each}
		</ul>
	{/if}
	<NavBar />
</main>
