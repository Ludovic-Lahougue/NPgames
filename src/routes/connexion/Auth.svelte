<script>
	import { supabase } from "$lib/supabaseClient";

	let loading = false;
	let email;
	let username;
	let password;

	const handleSignIn = async () => {
		try {
			loading = true;
			const { data, error } = await supabase.auth.signInWithPassword({
				email: email,
				password: password,
			});
			if (error) throw error;
			else location.href = "/";
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>

<form class="row flex-center flex" on:submit|preventDefault={handleSignIn}>
	<div class="col-6 form-widget">
		<h1 class="header">Connexion</h1>
		<div>
			<input
				class="inputField"
				type="email"
				placeholder="Adresse e-mail"
				bind:value={email}
			/>
		</div>
		<div>
			<input
				class="inputField"
				type="password"
				placeholder="Mot de passe"
				bind:value={password}
			/>
		</div>
		<div>
			<input
				type="submit"
				class="button block"
				value={loading ? "Chargement" : "Se connecter"}
				disabled={loading}
			/>
		</div>
		<a href="/inscription">Pas de compte ?</a>
	</div>
</form>
