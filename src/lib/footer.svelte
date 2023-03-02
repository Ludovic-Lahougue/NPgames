<script>
	const tab = [
		{ label: "Scores", link: "", img: "" },
		{ label: "Home", link: "", img: "" },
		{ label: "Account", link: "", img: "" },
	];
</script>

<div class="flex flex-row justify-evenly bg-indigo">
	{#each tab as menu}
		<a class="py-3 text-orange" href={menu.link}>{menu.label}</a>
	{/each}
</div>
