<script>
	export let placeholder = "input";
	export let type = null;
	export let label = "";
	export let name = "";
</script>

<div>
	<label for={name}>{label}</label>
	<input
		class="rounded-lg border border-grey py-2 px-4 focus:outline-none focus:border-orange"
		{type}
		{placeholder}
		{name}
	/>
</div>
