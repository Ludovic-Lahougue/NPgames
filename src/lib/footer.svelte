<script>
	const tab = [
		{ label: "Scores", link: "/scores", img: "" },
		{ label: "Home", link: "/", img: "" },
		{ label: "Account", link: "/profile", img: "" },
	];
</script>

<div
	class="flex flex-row justify-evenly bg-secondary fixed bottom-0 w-full select-none font-prompt"
>
	{#each tab as menu}
		<a class="py-3 text-primary" href={menu.link}>{menu.label}</a>
	{/each}
</div>
