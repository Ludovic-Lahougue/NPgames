<script>
	import DefaultButton from "$lib/defaultButton.svelte";
	import Title from "../../lib/title.svelte";
	import CustomInput from "$lib/input.svelte";
	import Form from "../../lib/form.svelte";
</script>

<main class="px-4">
	<Title subTitle="Connexion" />
	<Form action="?/login" method="post">
		<CustomInput
			type="email"
			placeholder="exemple@email.com"
			label="email"
			name="email"
		/>
		<CustomInput
			label="Mot de passe"
			type="password"
			name="password"
			placeholder="Mot de passe"
		/>
		<DefaultButton label="Se connecter" type="submit" />
		<div>
			Pas de compte ?
			<DefaultButton label="S'inscrire" link="/inscription" underline />
		</div>
	</Form>
</main>
