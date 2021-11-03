<script>
	export let img = "";
	export let alt = "";
</script>

{#if img && img.original}
	<picture class="block relative">
		{#if img.webp}
			<source srcset={img.webp} media="image/webp" />
			<source srcset={img.original} media={"image/" + img.ext} />
		{/if}
		<img class="w-full" src={img.original} {alt} loading="lazy" />
	</picture>
{/if}
