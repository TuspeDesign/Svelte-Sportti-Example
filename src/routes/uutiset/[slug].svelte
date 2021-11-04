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
    <div id="images">

        {#each data.images as item}
			<Image img={item} alt={data.title}/>		  
        {/each}
    </div>

    <div class="content">{@html data.content}</div>
{/if}

<style scoped>
	.content{
	display: block;
	margin-left: 750px;
	margin-right: 750px;
	width: 50%;
	margin-top: 5rem;
	margin-bottom: 5rem;
}
</style>