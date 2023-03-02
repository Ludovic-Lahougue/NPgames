<main>
	<form action="?/login" method="post" class="row flex-center flex">
		<div class="col-6 form-widget">
			<h1 class="header">Connexion</h1>
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
					type="password"
					name="password"
					placeholder="Mot de passe"
				/>
			</div>
			<div>
				<input
					type="submit"
					class="button block"
					value="Se connecter"
				/>
			</div>
			<a href="/inscription">Pas de compte ?</a>
		</div>
	</form>
</main>
