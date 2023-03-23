<script>
	export let label = "button";
	export let link = null;
	export let type = "button";
</script>

<button
	class="bg-orange border border-orange rounded-xl hover:bg-white duration-300"
	{type}
>
	<p class="py-2 px-4 text-white hover:text-orange">
		{#if link}
			<a href={link}>{label}</a>
		{:else}
			{label}
		{/if}
	</p>
</button>
