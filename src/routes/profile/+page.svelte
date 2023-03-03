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
	<div class="w-full p-4">
		Connectez-vous pour sauvegarder vos scores !
		<p class="font-prompt">test de Prompt</p>
		<span>pas en Prompt</span><span class="font-prompt">a Prompt</span>
		<DefaultButton label="S'inscrire" link="/inscription" />
		<DefaultButton label="Se connecter" link="/connexion" />
	</div>
{/if}
<Footer />
