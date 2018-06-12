class LottoTable extends HTMLElement {
	constructor (data) {
		super();
		this.setData(data);
	}
	
	setData (data) {
		if (!data) {
			return;
		}
		// Numbers belong to the header, stats belong to the table itself
		this.numbers = data.numbers;
		this.euroNumbers = data.euroNumbers
		this.stats = data.stats;
	}
	
	connectedCallback () {
		this.renderHeader();
		this.renderTable();
	}
	
	renderHeader () {
		let headerDiv = document.createElement('div');
		headerDiv.classList.add('header');
		this.appendChild(headerDiv);
		
		// List winning numbers
		this.numbers.forEach((numberSpot) => {
			headerDiv.appendChild(this.createSpan(numberSpot, false));
		});
		
		this.euroNumbers.forEach((numberSpot) => {
			headerDiv.appendChild(this.createSpan(numberSpot, true));
		});
	}
	
	createSpan (text, isEuro) {
		let spanElement = document.createElement('span');
		spanElement.innerHTML = text;
		if (isEuro) {
			spanElement.classList.add('euro');
		}
		
		return spanElement;
	}
	
	renderTable () {
		// Display winners and statistics
	}
};

window.customElements.define('lotto-table', LottoTable);