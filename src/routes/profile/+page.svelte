<script>
	export let data;
	import NavBar from "../../lib/navBar.svelte";
	import DefaultButton from "../../lib/defaultButton.svelte";
	import Title from "../../lib/title.svelte";
	import Form from "../../lib/form.svelte";
</script>

<Title subTitle="Profile" />

<div class="px-4 flex flex-col items-center">
	{#if data.session}
		<Form action="/logout" method="post">
			<p>Hello {data.username}</p>
			<DefaultButton
				addClass="self-center"
				label="Log out"
				type="submit"
			/>
		</Form>
	{:else}
		<Form>
			<p>Create an account to save your best scores !</p>
			<div class="flex flex-row justify-evenly">
				<DefaultButton label="Register" link="/register" />
				<DefaultButton label="Log in" link="/login" />
			</div>
		</Form>
	{/if}
</div>
<NavBar />
