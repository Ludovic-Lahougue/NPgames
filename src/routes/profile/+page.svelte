<script>
	export let data;
	import Footer from "../../lib/footer.svelte";
	import DefaultButton from "../../lib/defaultButton.svelte";
	import Title from "../../lib/title.svelte";
</script>

<Title subTitle="Profile" />
{#if data.session}
	Connecté en tant que {data.session.user.email}
	<form action="/logout" method="post">
		<DefaultButton label="Déconnexion" />
	</form>
{:else}
	<div class="w-full p-4">
		Connectez-vous pour sauvegarder vos scores !
		<DefaultButton label="S'inscrire" link="/inscription" />
		<DefaultButton label="Se connecter" link="/connexion" />
	</div>
{/if}
<Footer />
