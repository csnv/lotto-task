class LottoTable extends HTMLElement {
	constructor (data) {
		super();
		this.setData(data);
	}
	
	setData (data) {
		// Numbers belong to the header, stats belong to the table itself
		this.numbers = data.numbers;
		this.euroNumbers = data.euroNumbers
		this.stats = data.stats;
	}
};

window.customElements.define('lotto-table', LottoTable);