<script>
	import { postData } from "$lib/store";
	import { onMount } from "svelte";

	let data = [];

	onMount(async () => {
		postData("page&id=" + id).then(function (result) {
			data = result;
		});
	});
</script>