//const fetch = require('node-fetch');

async function getCampers(url) {
	const response = await fetch(url);
	const result = await response.json();
	console.log(result)
	return result;
}
//const campersAllTime = getCampers('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
//campersAllTime;
export default getCampers
