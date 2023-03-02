<script>
	import DefaultButton from "../../lib/defaultButton.svelte";
	import Title from "../../lib/title.svelte";
</script>

<main>
	<Title subTitle="Inscription" />
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
			<div>
				Déjà un compte ?
				<DefaultButton link="/connexion" label="Se connecter" />
			</div>
		</div>
	</form>
</main>
