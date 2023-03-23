<script>
	import DefaultButton from "../../lib/defaultButton.svelte";
	import Form from "../../lib/form.svelte";
	import Title from "../../lib/title.svelte";
	import CustomInput from "$lib/input.svelte";
</script>

<main class="px-4">
	<Title subTitle="Inscription" />
	<Form action="?/register" method="post">
		<h1 class="header">Création du compte</h1>
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
		<DefaultButton type="submit" label="S'inscrire" />
		<div>
			Déjà un compte ?
			<DefaultButton
				link="/connexion"
				label="Se connecter"
				underline="true"
			/>
		</div>
	</Form>
</main>
