<script>
	export let data;
</script>

<main>
	<a href="/games">Retour</a>
	<form action="?/editGame" method="post" class="row flex-center flex">
		<div class="col-6 form-widget">
			<h1 class="header">Modification</h1>
			<div>
				<input
					class="inputField"
					type="text"
					name="name"
					placeholder="Nom du jeu"
					required
					value={data.game.name}
				/>
			</div>
			<div>
				<select name="category" value={data.game.category}>
					<option value="Réflexion">Réflexion</option>
					<option value="2 joueurs">2 joueurs</option>
					<option value="Puzzle">Puzzle</option>
				</select>
			</div>
			<div>
				<textarea name="description" rows="5" cols="50"
					>{data.game.description}</textarea
				>
			</div>
			<div>
				<input
					class="inputField"
					type="text"
					name="url"
					placeholder="URL du jeu"
					required
					value={data.game.url}
				/>
			</div>
			<div>
				<input type="text" name="image" value={data.game.image} />
			</div>
			<div>
				<input type="submit" class="button block" value="Modifier" />
			</div>
		</div>
	</form>
</main>
