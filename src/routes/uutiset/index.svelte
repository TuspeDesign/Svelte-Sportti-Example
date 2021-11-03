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
</script>

<div class="content">

<header>Ajankohtaista</header>

{#if data && data[0]}
	<ul class="grid grid-cols-1 gap-6">
		{#each data as item}
			<div style="width:100%;text-align:center;">
				<li>
					<a href={'/' + item.id}>
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
		margin-left: 350px;
		margin-right: 350px;
		font-size: x-large;
		font-style: italic;
		margin-bottom: 5rem;
	}
</style>