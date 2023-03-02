<script>
	export let label = "button";
	export let link = null;
</script>

<button class="bg-orange rounded-xl" type="submit">
	{#if link}
		<a class="py-2 px-4 text-white" href={link}>{label}</a>
	{:else}
		<p class="py-2 px-4 text-white">{label}</p>
	{/if}
</button>
