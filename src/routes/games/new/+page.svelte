<main>
	<form action="?/newGame" method="post" class="row flex-center flex">
		<div class="col-6 form-widget">
			<h1 class="header">Nouveau jeu</h1>
			<div>
				<input
					class="inputField"
					type="text"
					name="name"
					placeholder="Nom du jeu"
					required
				/>
			</div>
			<div>
				<select name="category">
					<option value="Réflexion">Réflexion</option>
					<option value="2 joueurs">2 joueurs</option>
					<option value="Puzzle">Puzzle</option>
				</select>
			</div>
			<div>
				<textarea
					name="description"
					placeholder="Description"
					rows="5"
					cols="50"
				/>
			</div>
			<div>
				<input type="text" name="image" placeholder="Image" />
			</div>
			<div>
				<input type="submit" class="button block" value="Créer" />
			</div>
		</div>
	</form>
</main>
