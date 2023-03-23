<script>
	import DefaultButton from "$lib/defaultButton.svelte";
	import Title from "../../lib/title.svelte";
	import CustomInput from "$lib/input.svelte";
	import Form from "../../lib/form.svelte";
	import ArrowBack from "../../lib/arrowBack.svelte";
</script>

<main>
	<Title subTitle="Login" />

	<div class="px-4 flex flex-col items-center">
		<ArrowBack link="/profile" />

		<Form action="?/login" method="post">
			<h1 class="text-xl">Log in to your account</h1>
			<CustomInput
				type="email"
				placeholder="exemple@email.com"
				label="email"
				name="email"
			/>
			<CustomInput
				label="Password"
				type="password"
				name="password"
				placeholder="********"
			/>
			<DefaultButton
				addClass="self-center"
				label="Log in"
				type="submit"
			/>
			<div>
				No account ?
				<DefaultButton label="Register" link="/register" underline />
			</div>
		</Form>
	</div>
</main>
