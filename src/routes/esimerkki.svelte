<script>
	import { postData } from "$lib/store";
	import { onMount } from "svelte";
	import Image from "../components/image.svelte";

	// Tänne kerätään dataa
	let news = [];
	let videos = [];
	let games = [];

	// onMount ladataan kerran kun sivu / komponentti ladataan
	onMount(async () => {
		postData("news&limit=4").then(function (result) {
			news = result;
		});
		postData("videos&limit=4").then(function (result) {
			videos = result;
		});
		postData("games&limit=4").then(function (result) {
			games = result;
		});
	});
</script>

{#if news && news[0]}
	<h2>Ajankohtaista</h2>
	<ul class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
		{#each news as item}
			<li>
				<a
					class="news overlay-hidden"
					href={"/uutiset/" + item.id}
					title={"Uutinen: " + item.title}
					rel="prefetch"
				>
					<figure>
						<Image img={item.images[0]} alt={item.title} />
						<figcaption
							class="py-5 text-white text-lg italic leading-snug"
						>
							<strong>
								{item.created} - {item.title}
							</strong>
						</figcaption>
					</figure>
				</a>
			</li>
		{/each}
	</ul>
{/if}

{#if videos && videos[0]}
	<h2>Uusimmat videot</h2>
	<ul class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
		{#each videos as item}
			<li>
				<a
					class="news overlay-hidden"
					href={"/videot/" + item.id}
					title={"Videot: " + item.title}
					rel="prefetch"
				>
					<figure>
						<Image img={item.images[0]} alt={item.title} />
						<figcaption
							class="py-5 text-white text-lg italic leading-snug"
						>
							<strong>
								{item.created} - {item.title}
							</strong>
						</figcaption>
					</figure>
				</a>
			</li>
		{/each}
	</ul>
{/if}

{#if games && games[0]}
	<h2>Tulevat pelit</h2>
	<ul>
		{#each games as item}
			<li>
				<div>{item.date}</div>
				<div class="grid grid-cols-3 gap-6">
					<div>
						<Image
							img={item.homeTeam.logo}
							alt={item.homeTeam.name}
						/>
						<div>{item.homeTeam.name}</div>
					</div>

					<div>Alkaa<br />{item.time}</div>

					<div>
						<Image
							img={item.awayTeam.logo}
							alt={item.awayTeam.name}
						/>
						<div>{item.awayTeam.name}</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
{/if}
