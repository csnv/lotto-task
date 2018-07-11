(function() {
	let _data;
	
	class LottoTable extends HTMLElement {
		constructor () {
			super();
		}
		
		connectedCallback () {
			this.renderTable();
		}
		
		renderTable () {
			const ranks = this.querySelectorAll("tr");
			
			ranks.forEach((rankRow) => {
				let src = rankRow.dataset.src;
				
				if (!src) {
					return;
				}
				
				if (!data[src]) {
					this.disableRow(rankRow);
				}
				
				this.fillRow(rankRow, src);
			});
			
		}
		
		fillRow (row, property) {
			let slots = row.querySelectorAll("td");			
		}
	}

	window.customElements.define('lotto-table', LottoTable);
	
})();