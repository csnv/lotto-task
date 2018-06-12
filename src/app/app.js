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

let onServiceSuccess = () => {

};

let onServiceError = () => {
	
};

jQuery(document).ready(init);