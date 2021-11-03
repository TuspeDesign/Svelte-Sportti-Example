<script>
	import { postData } from "$lib/store";
	import { onMount } from "svelte";
	import Image from "../components/image.svelte";

	// Tänne kerätään dataa
	let data = [];

	// onMount ladataan kerran kun sivu / komponentti ladataan
	onMount(async () => {
		postData("news&limit=4").then(function (result) {
			data = result;
		});
	});
</script>

{#if data && data[0]}
	<ul class="grid grid-cols-3 gap-6">
		{#each data as item}
			<li>
				<a
					class="news rounded-b-md overlay-hidden"
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