<script>
	const tab = [
		{
			label: "Scores",
			link: "/scores",
			img: "M13 16.938V19h5v2H6v-2h5v-2.062A8.001 8.001 0 0 1 4 9V3h16v6a8.001 8.001 0 0 1-7 7.938zM6 5v4a6 6 0 1 0 12 0V5H6zM1 5h2v4H1V5zm20 0h2v4h-2V5z",
		},
		{
			label: "Games",
			link: "/games",
			img: "M17 4a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6h10zm-7 5H8v2H6v2h1.999L8 15h2l-.001-2H12v-2h-2V9zm8 4h-2v2h2v-2zm-2-4h-2v2h2V9z",
		},
		{
			label: "Account",
			link: "/profile",
			img: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
		},
	];
</script>

<div
	class="flex flex-row justify-evenly bg-secondary fixed bottom-0 w-full select-none font-prompt"
>
	{#each tab as menu}
		<a
			class="text-primary flex flex-col items-center py-2"
			href={menu.link}
		>
			<svg
				class="text-sm"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="24"
				height="24"
				><path fill="none" d="M0 0h24v24H0z" /><path
					fill="currentColor"
					d={menu.img}
				/></svg
			>
			<p>{menu.label}</p>
		</a>
	{/each}
</div>
