<script>
	export let data;
	import NavBar from "../../lib/navBar.svelte";
	import DefaultButton from "../../lib/defaultButton.svelte";
	import Title from "../../lib/title.svelte";
	import Form from "../../lib/form.svelte";
</script>

<Title subTitle="Profile" />

<div class="px-4 flex flex-col items-center">
	{#if data.session}
		<Form action="/logout" method="post">
			<p>Connecté en tant que {data.username}</p>
			<DefaultButton
				addClass="self-center"
				label="Déconnexion"
				type="submit"
			/>
		</Form>
	{:else}
		<Form>
			<p>Connectez-vous pour sauvegarder vos scores !</p>
			<div class="flex flex-row justify-evenly">
				<DefaultButton label="S'inscrire" link="/inscription" />
				<DefaultButton label="Se connecter" link="/connexion" />
			</div>
		</Form>
	{/if}
</div>
<NavBar />
