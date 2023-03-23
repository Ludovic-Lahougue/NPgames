<script>
	export let data;
	import NavBar from "$lib/navBar.svelte";
	import Button from "$lib/defaultButton.svelte";
	import Title from "../lib/title.svelte";
</script>

<div class="flex flex-col justify-between h-[100vh]">
	<Title subTitle="Welcome !" />
	<NavBar />
</div>
