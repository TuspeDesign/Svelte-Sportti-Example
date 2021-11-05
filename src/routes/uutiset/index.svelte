<script>
	import { postData } from "$lib/store";
	import { onMount } from "svelte";
	import Image from "../../components/image.svelte";

	let data = [];

	onMount(async () => {
		postData("news&limit=20").then(function (result) {
			data = result;
		});
	});

	function handleClick(){
		console.log('Moi');
	}

</script>

<div class="content">

<header>Ajankohtaista</header>

<button class="bg-black text-white px-4 py-2"> 
	<button 
		on:click={handleClick}>Klikkaa minua
	</button>
</button>

{#if data && data[0]}
	<ul class="grid grid-cols-1 gap-6">
		{#each data as item}
			<div style="width:100%;text-align:center;">
				<li>
					<a
						class="news rounded-b-md overlay-hidden"
						href={'/uutiset/' + item.id}
						title={"Uutinen: " + item.title}
						rel="prefetch"	
					>
						<figure>
							<Image img={item.images[0]} alt={item.title} />
							<figcaption
								class="py-5 text-black text-lg italic leading-snug">
								<strong>
									{item.title}
								</strong>
								<div class="pub">{item.created}</div>
							</figcaption>
						</figure>
					</a>
				</li>
			</div>
		{/each}
	</ul>
{/if}

</div>

<style scoped>
	ul{
	grid-template-columns: repeat(1, minmax(50rem, 1fr));
	max-width: 200px;
	max-height: 200px;
}
	.content{
	display: block;
	margin-left: 560px;
	margin-right: 560px;
	width: 50%;
	margin-top: 5rem;
}
	header{
	margin-left: 320px;
	margin-right: 320px;
	font-size: xx-large;
	font-style: italic;
	margin-bottom: 5rem;
	}
</style>