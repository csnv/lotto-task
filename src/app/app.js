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
	let lottoTable = document.getElementById("ranks");
	lottoTable.data = data.last.odds;
	lottoTable.render();
	
	let lottoNumbers = document.getElementById("numbers");
	lottoNumbers.data = {
		numbers: data.last.numbers,
		euroNumbers: data.last.euroNumbers
	};
	lottoNumbers.render();
};

let onServiceError = (errorData, response) => {
	console.error("Error performing the request", errorData, response);
};

jQuery(document).ready(init);