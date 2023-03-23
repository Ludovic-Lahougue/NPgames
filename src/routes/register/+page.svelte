<script>
	import DefaultButton from "../../lib/defaultButton.svelte";
	import Form from "../../lib/form.svelte";
	import Title from "../../lib/title.svelte";
	import CustomInput from "$lib/input.svelte";
	import ArrowBack from "../../lib/arrowBack.svelte";
</script>

<main>
	<Title subTitle="Register" />

	<div class="px-4 flex flex-col items-center">
		<ArrowBack link="/profile" />

		<Form action="?/register" method="post">
			<h1 class="text-xl">Create an account</h1>
			<CustomInput
				label="e-mail adress"
				type="email"
				name="email"
				placeholder="mail.adress@gmail.com"
			/>
			<CustomInput
				label="Usersame"
				type="text"
				name="username"
				placeholder="DupondGaming"
			/>
			<CustomInput
				label="Password"
				type="password"
				name="password"
				placeholder="********"
			/>
			<DefaultButton
				addClass="self-center"
				type="submit"
				label="Register"
			/>
			<div>
				Already have an account ?
				<DefaultButton link="/login" label="Log in" underline="true" />
			</div>
		</Form>
	</div>
</main>
