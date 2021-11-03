<script>
	import { postData } from "$lib/store";
	import { onMount } from "svelte";
	import Image from "../../components/image.svelte";

	// Tänne kerätään dataa
	let products = [];
	let priceCurrent = [];

	// onMount ladataan kerran kun sivu / komponentti ladataan
	onMount(async () => {
		postData("products&imageWidth=348&imageHeight=420").then(function (result) {
			products = result;
		});
	});

	onMount(async () => {
		postData("priceCurrent").then(function (result) {
			priceCurrent = result;
		});
	});

	
</script>

{#if products.items && products.items[0]}
	<ul class="grid grid-cols-3 gap-6">
		{#each products.items as item}
			<li>
				<a
					class="news rounded-b-md overlay-hidden"
					href={"/kauppa/" + item.id}
					title={"kauppa" + item.title}
					rel="prefetch"
				>
					<figure>
						<Image img={item.images[0]} alt={item.title} />
						<figcaption
							class="py-5 text-black text-lg italic leading-snug"
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

{#if priceCurrent && priceCurrent[0]}
	<ul class="grid grid-cols-3 gap-6">
		{#each priceCurrent as item}
			<li>
				<a
					class="news rounded-b-md overlay-hidden"
					href={"/kauppa/" + item.id}
					title={"priceCurrent" + item.title}
					rel="prefetch"
				>
					<figure>
						<Image img={item.images[0]} alt={item.title} />
						<figcaption
							class="py-5 text-black text-lg italic leading-snug"
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

