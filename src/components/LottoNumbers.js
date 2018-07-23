(function() {
	const COMMON_NUMBERS = "numbers";
	const EURO_NUMBERS = "euroNumbers";
	
	class LottoNumbers extends HTMLElement {
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
			let ordinalList = this.querySelectorAll("span:not(.euro)");
			let euroList = this.querySelectorAll("span.euro");
			
			ordinalList.forEach(this.iteratorCheckFn(COMMON_NUMBERS));
			euroList.forEach(this.iteratorCheckFn(EURO_NUMBERS));
		}
		
		iteratorCheckFn (type) {
			return (element, index) => {
				if (!this.data || !this.data[type] || !this.data[type][index]) {
					this.hideElement(element);
					return;
				}
				
				this.showElement(element);
				element.innerHTML = this.data[type][index];
			};
		}
		
		hideElement (element) {
			element.style.display = 'none';
		}
		
		showElement (element) {
			element.style.display = 'inline-block';
		}
	}

	window.customElements.define('lotto-numbers', LottoNumbers);
})();