<script>
	import DefaultButton from "$lib/defaultButton.svelte";
	import Title from "../../lib/title.svelte";
	import CustomInput from "$lib/input.svelte";
</script>

<main>
	<Title subTitle="Connexion" />
	<form action="?/login" method="post" class="row flex-center flex">
		<div class="col-6 form-widget">
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
				class="hover:text-orange hover:underline cursor-pointer duration-100"
			>
				Pas de compte ?
				<!-- <DefaultButton link="/inscription" label="S'inscrire" /> -->
			</div>
		</div>
	</form>
</main>
