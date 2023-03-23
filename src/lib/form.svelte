<script>
	export let action = "";
	export let method = "";
</script>

<form
	{action}
	{method}
	class="border border-primary rounded-xl bg-white flex flex-col gap-3 p-5 w-full max-w-xl"
>
	<slot />
</form>
