<script>
	import { page } from "$app/stores";
	import Account from "./Account.svelte";
	import Auth from "../connexion/Auth.svelte";
</script>

<svelte:head>
	<title>Modifier mon profil</title>
	<meta name="description" content="SvelteKit using supabase-js v2" />
</svelte:head>

{#if !$page.data.session}
	<Auth />
{:else}
	<Account session={$page.data.session} />
{/if}
