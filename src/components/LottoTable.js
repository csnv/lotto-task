(function() {
	class LottoTable extends HTMLElement {
		constructor () {
			super();
		}
		
		set data (__data) {
			this._data = __data;
		}
		
		get data () {
			return this._data;
		}
		
		connectedCallback () {
			this.render();
		}
		
		render () {
			if (!this.data) {
				this.querySelector("tbody").style.display = 'none';
				return;
			} else {
				this.querySelector("tbody").style.display = 'table-row-group';
			}
			const ranks = this.querySelectorAll("tr");
			
			ranks.forEach((rankRow) => {
				let src = rankRow.dataset.src;
				
				if (!src) {
					return;
				}
				
				if (!this.data || !this.data[src]) {
					this.disableRow(rankRow);
					return;
				}
				
				this.enableRow(rankRow);
				this.fillRow(rankRow, src);
			});
		}
		
		fillRow (row, property) {
			let slots = row.querySelectorAll("td");
			slots[2].innerHTML = this.unmask(slots[2].innerHTML, this.data[property].winners)
			slots[3].innerHTML = this.unmask(slots[3].innerHTML, this.data[property].prize);
		}
		
		unmask (string, value) {
			return string.replace("{{val}}", value);
		}
		
		enableRow (row) {
			row.style.display = "table-row";
		}
		
		disableRow (row) {
			row.style.display = 'none';
		}
	}

	window.customElements.define('lotto-table', LottoTable);
})();