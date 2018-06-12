const serviceUrl = "https://media.lottoland.com/api/drawings/euroJackpot";

let init = () => {
	jQuery.ajax({
		url: serviceUrl,
		type: 'get',
		dataType: 'jsonp'
	})
	.then(onServiceSuccess)
	.fail(onServiceError);
};

let onServiceSuccess = (data) => {
	// We only need the winner numbers and the statistics of winners
	let winnerNumbers = data.last.numbers;
	let winnerEuroNumbers = data.last.euroNumbers;
	let winnerStats = data.last.odds;
	
	let lottoTable = new LottoTable({
		numbers: winnerNumbers,
		euroNumbers: winnerEuroNumbers,
		stats: winnerStats,
	});
	
	document.body.appendChild(lottoTable);
};

let onServiceError = () => {
	
};

jQuery(document).ready(init);