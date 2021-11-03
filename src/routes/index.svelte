<script>
	import { postData } from "$lib/store";
	import { onMount } from "svelte";
	import Image from "../components/image.svelte";

	// Tänne kerätään dataa
	let news = [];
	let videos = [];

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
	<ul class="grid grid-cols-3 gap-6">
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
							class="py-5 text-grey text-lg italic leading-snug"
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
	<ul class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
		{#each news as item}
			<li>
				<a
					class="news overlay-hidden"
					href={"/uutiset/" + Item.id}
					title={"Uutinen: " + Item.title}
					rel="prefetch"
				>
					<figure>
						<Image img={Item.images[0]} alt={Item.title} />
						<figcaption
							class="py-5 text-grey text-lg italic leading-snug"
						>
							<strong>
								{Item.created} - {Item.title}
							</strong>
						</figcaption>
					</figure>
				</a>
			</li>
		{/each}
	</ul>
	{/if}