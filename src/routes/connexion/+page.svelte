<script>
	import DefaultButton from "$lib/defaultButton.svelte";
	import Title from "../../lib/title.svelte";
	import CustomInput from "$lib/input.svelte";
	import Form from "../../lib/form.svelte";
	import ArrowBack from "../../lib/arrowBack.svelte";
</script>

<main>
	<Title subTitle="Connexion" />

	<div class="px-4 flex flex-col items-center">
		<ArrowBack link="/profile" />

		<Form action="?/login" method="post">
			<h1 class="text-xl">Connexion à votre compte</h1>
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
			<DefaultButton
				addClass="self-center"
				label="Se connecter"
				type="submit"
			/>
			<div>
				Pas de compte ?
				<DefaultButton
					label="S'inscrire"
					link="/inscription"
					underline
				/>
			</div>
		</Form>
	</div>
</main>
