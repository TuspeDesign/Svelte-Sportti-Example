<script>
	import { postData } from "$lib/store";
	import { onMount } from "svelte";
	import { page } from '$app/stores';
	import Image from "../../components/image.svelte";

	const id = parseInt($page.params.slug);

	let data = [];

	onMount(async () => {
		postData("page&id=" + id).then(function (result) {
			data = result;
		});
	});
</script>

{#if data && data.id}
<div class="mx-auto max-w-screen-lg">

	<div id="images">
    	{#each data.images as item}
			<Image img={item} alt={data.title}/>		  
    	{/each}
	</div>

	<div class="content">{@html data.content}</div>
</div>
{/if}

<style scoped>
	.content{
	margin-top: 5rem;
	margin-bottom: 5rem;
}
</style>