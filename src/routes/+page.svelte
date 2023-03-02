<script>
	export let data;
	import Footer from "$lib/footer.svelte";
	import Button from "$lib/defaultButton.svelte";
</script>

<div class="flex flex-col justify-between h-[100vh]">
	<h1 class="text-3xl text-center">Bienvenue sur NPgames !</h1>
	<!-- {#if data.session}
		Connecté en tant que {data.session.user.email}
		<form action="/logout" method="post">
			<Button label="Déconnexion" />
		</form>
	{:else}
		<a href="/inscription">S'inscrire</a>
		<a href="/connexion">Se connecter</a>
		<Button label="S'inscrire" link="/inscription" />
		<Button label="Se connecter" link="/connexion" />
	{/if} -->
	<Footer />
</div>
