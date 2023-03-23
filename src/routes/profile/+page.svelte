<script>
	export let data;
	import Footer from "../../lib/footer.svelte";
	import DefaultButton from "../../lib/defaultButton.svelte";
	import Title from "../../lib/title.svelte";
</script>

<Title subTitle="Profile" />
{#if data.session}
	Connecté en tant que {data.username}
	<form action="/logout" method="post">
		<DefaultButton label="Déconnexion" type="submit" />
	</form>
{:else}
	<div class="w-full p-4 flex flex-col">
		<p>Connectez-vous pour sauvegarder vos scores !</p>
		<div class="flex flex-row justify-evenly">
			<DefaultButton label="S'inscrire" link="/inscription" />
			<DefaultButton label="Se connecter" link="/connexion" />
		</div>
	</div>
{/if}
<Footer />
