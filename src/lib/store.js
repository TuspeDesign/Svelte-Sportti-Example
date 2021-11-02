export let postData = async function (query) {

	const result = await fetch(`https://joensuunkiekkopojat.fi/api?type=${query}`)
		.then(response => response.json())
		.catch(err => {
			console.error(err);
		});
	return result
}