<script>
	export let subTitle = null;
</script>

<div class="w-full text-center py-6 ">
	<p class="text-5xl font-bold text-transparent italic title font-sans">
		NPGames
	</p>
	{#if subTitle}
		<p class="text-orange text-xl">{subTitle}</p>
	{/if}
</div>
