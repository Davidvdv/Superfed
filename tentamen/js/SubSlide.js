function SubSlide() {
	
	var parentId = 0;

	this.getParent = function() {
		return parentId;
	}
}

/* Overerven van parent class Slide */
SubSlide.prototype = new Slide();