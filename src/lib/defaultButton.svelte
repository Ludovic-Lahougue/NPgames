<script>
	export let label = "button";
	export let link = null;
	export let type = "button";
	export let underline = false;
	export let addClass = "";
</script>

<button
	class={underline
		? ""
		: `${addClass} bg-primary border border-primary rounded-xl hover:bg-white duration-300`}
	{type}
>
	<p
		class={underline
			? "text-primary hover:underline cursor-pointer duration-100"
			: "py-2 px-4 text-white hover:text-primary"}
	>
		{#if link}
			<a href={link}>{label}</a>
		{:else}
			{label}
		{/if}
	</p>
</button>
