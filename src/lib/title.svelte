<script>
	export let subTitle = null;
	export let link = "/";
</script>

<div class="w-full text-center py-6 ">
	<a
		href={link}
		class="text-5xl font-bold text-transparent italic title font-sans"
	>
		NPGames
	</a>
	{#if subTitle}
		<p class="text-primary text-xl">{subTitle}</p>
	{/if}
</div>
