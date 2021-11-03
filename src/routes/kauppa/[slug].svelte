<script>
	import { page } from '$app/stores';
	const id = parseInt($page.params.slug);
	let data = {};
	fetch('https://joensuunkiekkopojat.fi/api?type=${query}' + id)
		.then((res) => res.json())
		.then(function (res) {
			data = res;
		});
</script>

{#if data && data.id}
	<h1>{data.title}</h1>
	<div class="content">{@html data.content}</div>
	<div id="images">
		{#each data.images as item}
			<img src={item} alt={data.title} />
		{/each}
	</div>
{/if}