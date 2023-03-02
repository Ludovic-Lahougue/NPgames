<script>
	export let data;
	import Footer from "../../lib/footer.svelte";
	import DefaultButton from "../../lib/defaultButton.svelte";
</script>

{#if data.session}
	Connecté en tant que {data.session.user.email}
	<form action="/logout" method="post">
		<DefaultButton label="Déconnexion" />
	</form>
{:else}
	<!-- <a href="/inscription">S'inscrire</a>
		<a href="/connexion">Se connecter</a> -->
	<DefaultButton label="S'inscrire" link="/inscription" />
	<DefaultButton label="Se connecter" link="/connexion" />
{/if}
<Footer />
