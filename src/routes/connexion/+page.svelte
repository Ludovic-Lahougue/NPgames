<script>
	import DefaultButton from "$lib/defaultButton.svelte";
	import Title from "../../lib/title.svelte";
	import CustomInput from "$lib/input.svelte";
</script>

<main>
	<Title subTitle="Connexion" />
	<form action="?/login" method="post" class="row flex-center flex">
		<div class="col-6 form-widget">
			<div>
				<CustomInput
					type="email"
					placeholder="exemple@email.com"
					label="email"
					name="email"
				/>
			</div>
			<div>
				<CustomInput
					label="email"
					type="password"
					name="password"
					placeholder="Mot de passe"
				/>
			</div>
			<div>
				<DefaultButton label="Se connecter" type="submit" />
				<input
					type="submit"
					class="button block"
					value="Se connecter"
				/>
			</div>
			<div>
				Pas de compte ?
				<!-- <DefaultButton link="/inscription" label="S'inscrire" /> -->
			</div>
		</div>
	</form>
</main>
