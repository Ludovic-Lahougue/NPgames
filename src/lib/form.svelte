<script>
	export let action = "";
	export let method = "";
</script>

<form
	{action}
	{method}
	class="rounded-xl bg-white bg-opacity-10 flex flex-col gap-3 p-5 w-full max-w-xl text-white"
>
	<slot />
</form>
