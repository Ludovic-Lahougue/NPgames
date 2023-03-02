<script>
	import DefaultButton from "../../lib/defaultButton.svelte";
	import Title from "../../lib/title.svelte";
</script>

<main>
	<Title subTitle="Connexion" />
	<form action="?/login" method="post" class="row flex-center flex">
		<div class="col-6 form-widget">
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
			<div>
				Pas de compte ? <DefaultButton
					link="/inscription"
					label="S'inscrire"
				/>
			</div>
		</div>
	</form>
</main>
