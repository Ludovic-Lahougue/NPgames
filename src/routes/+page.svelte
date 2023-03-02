<script>
	export let data;
	import Footer from "$lib/footer.svelte";
	import Button from "$lib/defaultButton.svelte";
	import Title from "../lib/title.svelte";
</script>

<div class="flex flex-col justify-between h-[100vh]">
	<Title subTitle="Welcome !" />
	<Footer />
</div>
