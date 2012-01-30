/** Class Calculator **/
function Calculator() {
	
	/** Eigenschap van de class **/
	this._result = 0;
	
	this.multiply = function( value1, value2 ) {
		this._result = value1 * value2;
	}
	
	this.plus = function( value1, value2 ) {
		this._result = value1 + value2;
	}
	
	this.devide = function( value1, value2 ) {
		this._result = value1 / value2;
	}
	
	this.substract = function( value1, value2 ) {
		this._result = value1 - value2;
	}
};

Calculator.prototype.getResult = function(){
    return this._result;
};

Calculator.prototype.setResult = function(result){
	this._result = result;
};