<script>
	export let data;
</script>

<h1>Bienvenue sur NPgames !</h1>
{#if data.session}
	Connecté en tant que {data.session.user.email}
	<form action="/logout" method="post">
		<button type="submit">Déconnexion</button>
	</form>
{:else}
	<a href="/inscription">S'inscrire</a>
	<a href="/connexion">Se connecter</a>
{/if}
