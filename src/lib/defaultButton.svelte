<script>
	export let label = "button";
	export let link = null;
	export let type = "button";
</script>

<button class="bg-orange rounded-xl" {type}>
	<p class="py-2 px-4 text-white">
		{#if link}
			<a href={link}>{label}</a>
		{:else}
			{label}
		{/if}
	</p>
</button>
