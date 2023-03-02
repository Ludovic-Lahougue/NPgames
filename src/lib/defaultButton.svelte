<script>
	export let label = "button";
	export let link = null;
</script>

<button class="bg-orange rounded-xl" type="submit">
	<p class="py-2 px-4 text-white">
		{#if link}
			<a href={link}>{label}</a>
		{:else}
			{label}
		{/if}
	</p>
</button>
