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
		<div
			class="hover:text-primary hover:underline cursor-pointer duration-100"
		>
			Pas de compte ?
		</div>
	</Form>
</main>
