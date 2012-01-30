function Drawer() {
	
	var galgjeCanvas = document.getElementById('galg');
	// Check the element is in the DOM and the browser supports canvas
	
	// Initaliase a 2-dimensional drawing context
	if(galgjeCanvas.getContext) this.c = galgjeCanvas.getContext('2d'); else alert('Je browser ondersteunt dit onderdeel niet.');

	this.blankCanvas = function() {
		galgjeCanvas.width = galgjeCanvas.width;
	}

	this.grond = function() {
		this.c.fillRect(10,380,480,10); // x, y, width, height
	}
	
	this.paal = function() {
		this.c.fillRect(50,50,10,330); // x, y, width, height
	}
	
	this.balk = function() {
		this.c.fillRect(50,40,200,10); // x, y, width, height
		
		this.c.moveTo(50, 150);
		this.c.lineWidth = 10;
		this.c.lineTo(150, 40);
		this.c.stroke();
	}
	
	this.strop = function() {
		this.c.moveTo(230, 50);
		this.c.lineWidth = 3;
		this.c.lineTo(230, 100);
		this.c.stroke();
	}
	
	this.hoofd = function() {
		this.c.beginPath();
		this.c.arc(230, 120, 20, 0, Math.PI*2, true); //arc(x, y, radius, startAngle, endAngle, anticlockwise)
		this.c.stroke();
	}
	
	this.romp = function() {
		this.c.scale(0.75, 1);
		this.c.beginPath();
		this.c.lineWidth = 3;
		this.c.arc(310, 190, 50, 0, Math.PI*2, true); //arc(x, y, radius, startAngle, endAngle, anticlockwise)
		this.c.stroke();
		this.c.restore();
	}
	
	this.leftArm = function() {
		this.c.moveTo(260, 150);
		this.c.lineWidth = 3;
		this.c.lineTo(170, 160);
		this.c.stroke();
	}

	this.rightArm = function() {
		this.c.moveTo(350, 150);
		this.c.lineWidth = 3;
		this.c.lineTo(440, 160);
		this.c.stroke();
	}
	
	this.leftLeg = function() {
		this.c.moveTo(270, 240);
		this.c.lineWidth = 3;
		this.c.lineTo(250, 300);
		this.c.stroke();
	}
	
	this.rightLeg = function() {
		this.c.moveTo(330, 240);
		this.c.lineWidth = 3;
		this.c.lineTo(350, 300);
		this.c.stroke();
	}
}