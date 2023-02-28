<script>
	import { supabase } from "$lib/supabaseClient";

	let loading = false;
	let email;
	let username;
	let password;

	const handleSignIn = async () => {
		try {
			loading = true;
			const { data, error } = await supabase.auth.signUp(
				{
					email: email,
					password: password,
				},
				{
					username: username,
				}
			);
			if (error) throw error;
			else alert("Un mail de confirmation vous a été envoyé.");
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
		<h1 class="header">Création du compte</h1>
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
				type="text"
				placeholder="Nom d'utilisateur"
				bind:value={username}
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
				value={loading ? "Chargement" : "S'inscrire"}
				disabled={loading}
			/>
		</div>
		<a href="/connexion">Déjà un compte ?</a>
	</div>
</form>
