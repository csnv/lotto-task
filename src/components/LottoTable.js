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
		this.date = data.date;
		this.currency = data.currency;
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
		let table = document.createElement('table');
		let tbody = document.createElement('tbody');
		
		table.appendChild(this.createTableHeader());
		
		let addRow = (row) => table.appendChild(row);
		// We always expect 10 results
		addRow(this.createTableRow("I", this.stats.rank1));
		addRow(this.createTableRow("II", this.stats.rank2));
		addRow(this.createTableRow("III", this.stats.rank3));
		addRow(this.createTableRow("IV", this.stats.rank4));
		addRow(this.createTableRow("V", this.stats.rank5));
		addRow(this.createTableRow("VI", this.stats.rank6));
		addRow(this.createTableRow("VII", this.stats.rank7));
		addRow(this.createTableRow("VIII", this.stats.rank8));
		addRow(this.createTableRow("IX", this.stats.rank9));
		addRow(this.createTableRow("X", this.stats.rank10));
		addRow(this.createTableRow("XI", this.stats.rank11));
		addRow(this.createTableRow("XII", this.stats.rank12));
		
		
		this.appendChild(table);
	}
	
	createTableHeader () {
		let thead = document.createElement('thead');
		thead.innerHTML = "<tr><th>Tier</th><th>Match</th><th>Winners</th><th>Amount</th>";
		return thead;
	}
	
	createTableRow (position, data) {
		let tr = document.createElement('tr');
		
		let tierTd = document.createElement('td');
		tierTd.innerText = position;
		let matchTd = document.createElement('td');
		matchTd.innerText = this.getMatchText(position);
		let winnersTd = document.createElement('td');
		winnersTd.innerHTML = this.formatLocale(data.winners) + "x";
		let prizeTd = document.createElement('td');
		prizeTd.innerHTML = this.formatLocale(data.prize);
		
		tr.appendChild(tierTd);
		tr.appendChild(matchTd);
		tr.appendChild(winnersTd);
		tr.appendChild(prizeTd);
		
		return tr;		
	}
	
	getMatchText () {
		return ""
	}
	
	formatLocale (number, currency) {
		return ""
	}
};

window.customElements.define('lotto-table', LottoTable);