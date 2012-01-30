function Slide(nr, slideName, htmlContent) {
	
	var id = 0;
	var name = slideName;
	var content = htmlContent;

	this.getContent = function() {
		return content;
	}

	this.getId = function() {
		return id;
	}

	this.getName = function() {
		return name;
	}
}