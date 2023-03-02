<script>
	const tab = [
		{ label: "Scores", link: "/scores", img: "" },
		{ label: "Home", link: "/", img: "" },
		{ label: "Account", link: "/profile", img: "" },
	];
</script>

<div class="flex flex-row justify-evenly bg-indigo fixed bottom-0 w-full">
	{#each tab as menu}
		<a class="py-3 text-orange" href={menu.link}>{menu.label}</a>
	{/each}
</div>
