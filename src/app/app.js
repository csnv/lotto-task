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
	// Recollect the data we need in the component
	
	let lottoTable = new LottoTable({
		numbers: data.last.numbers,
		euroNumbers: data.last.euroNumbers,
		stats: data.last.odds,
		currency: data.last.currency,
		date: data.last.date
	});
	
	document.body.appendChild(lottoTable);
};

let onServiceError = () => {
	
};

jQuery(document).ready(init);