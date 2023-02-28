<script>
	export let data;
</script>

<h1>Bienvenue sur NPgames !</h1>
{#if data.session}
	Connecté
	<a href="/profil">Voir le profil</a>
{:else}
	<a href="/inscription">S'inscrire</a>
	<a href="/connexion">Se connecter</a>
{/if}
