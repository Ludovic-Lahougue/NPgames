<script>
	import DefaultButton from "../../lib/defaultButton.svelte";
	import Form from "../../lib/form.svelte";
	import Title from "../../lib/title.svelte";
	import CustomInput from "$lib/input.svelte";
</script>

<main>
	<Title subTitle="Inscription" />

	<div class="px-4 flex flex-col items-center">
		<Form action="?/register" method="post">
			<h1 class="text-xl">Création d'un compte</h1>
			<CustomInput
				label="Adresse e-mail"
				type="email"
				name="email"
				placeholder="Adresse e-mail"
			/>
			<CustomInput
				label="Nom d'utilisateur"
				type="text"
				name="username"
				placeholder="DupondGaming"
			/>
			<CustomInput
				label="Mot de passe"
				type="password"
				name="password"
				placeholder=""
			/>
			<DefaultButton
				addClass="self-center"
				type="submit"
				label="S'inscrire"
			/>
			<div>
				Déjà un compte ?
				<DefaultButton
					link="/connexion"
					label="Se connecter"
					underline="true"
				/>
			</div>
		</Form>
	</div>
</main>
