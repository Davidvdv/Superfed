/** Class AdvancedCal - bevat extra functionaliteit **/
function AdvancedCal() {
		
	this.ceil = function( value ) {
		this._result = Math.ceil(value);
	}
};

/** Over erven van properties en methods van Calculator **/
AdvancedCal.prototype = new Calculator();