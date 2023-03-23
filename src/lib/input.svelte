<script>
	export let placeholder = "input";
	export let type = null;
	export let label = "";
	export let name = "";
</script>

<div class="flex flex-col">
	<label for={name}>{label}</label>
	<input
		class="rounded-lg bg-white bg-opacity-10 py-2 px-4 placeholder-shown:border-gray-500 autofill:bg-yellow-200"
		{type}
		{placeholder}
		{name}
	/>
</div>
