<main>
	<h1>Inscription</h1>
	<form action="?/register" method="post" class="row flex-center flex">
		<div class="col-6 form-widget">
			<h1 class="header">Création du compte</h1>
			<div>
				<input
					class="inputField"
					type="email"
					name="email"
					placeholder="Adresse e-mail"
				/>
			</div>
			<div>
				<input
					class="inputField"
					type="text"
					name="username"
					placeholder="Nom d'utilisateur"
				/>
			</div>
			<div>
				<input
					class="inputField"
					type="password"
					name="password"
					placeholder="Mot de passe"
				/>
			</div>
			<div>
				<input
					type="submit"
					class="button block"
					value={"S'inscrire"}
				/>
			</div>
			<a href="/connexion">Déjà un compte ?</a>
		</div>
	</form>
</main>
