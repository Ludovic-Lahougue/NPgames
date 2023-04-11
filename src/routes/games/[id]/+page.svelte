<script>
	import "../../../styles/games.css"
	import ArrowBack from "../../../lib/arrowBack.svelte";
	import Moment from 'moment';
	
	export let data;

	function msToTime(duration) {
		let milliseconds = Math.floor((duration % 1000) / 100),
		seconds = Math.floor((duration / 1000) % 60),
		minutes = Math.floor((duration / (1000 * 60)) % 60),
		hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

		hours = (hours < 10) ? "0" + hours : hours;
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		seconds = (seconds < 10) ? "0" + seconds : seconds;

		return (hours != 0  ? hours + ":" : "") + minutes + ":" + seconds + "." + milliseconds;
	}
</script>

<main>
	<ArrowBack link="/games" />
	
	<div class="px-5 md:px-12">	
		<div class="flex flex-col md:flex-row justify-center gap-10">
			<div class="card">
				<p class="card-category">{data.game.category}</p>
				{#if data.game.image != null}
				<div class="card-image">
					<img src={data.game.image} alt={data.game.name} />
				</div>
				{/if}
				<div class="card-body">
					<h3 class="card-title">{data.game.name}</h3>
					<div class="card-content">
						<p>{data.game.description || ''}</p>
						<a href="/games/{data.game.url}" class="btn">PLAY</a>
					</div>
				</div>
			</div>

			{#if data.session && data.bestScore}
				<div class="self-center">
					<p>Your best score:</p>
					<div class="flex flex-row justify-between">
						<p class="font-bold">#{data.bestScore.place}</p>
						<p>{msToTime(data.bestScore.value)}</p>
					</div>
				</div>
			{/if}

			<div class="self-center">
				<h3 class="text-center font-bold text-xl">Leaderboard</h3>
				{#if data.scores.length == 0}
					<p class="text-center">The leaderboard is empty.</p>
				{:else}
					<table class="table-fixed">
						<thead>
							<tr>
								<th></th>
								<th class="px-2">User</th>
								<th class="px-2">Time</th>
								<th class="px-2">Date</th>
							</tr>
						</thead>
						<tbody>
							{#each data.scores as score, i}
								<tr>
									<td class="font-bold">#{i + 1}</td>
									<td class="px-2">{score.profiles.username}</td>
									<td class="px-2">{msToTime(score.value)}</td>
									<td class="px-2">{Moment(score.date).fromNow()}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				{/if}
			</div>
		</div>
	</div>
</main>
