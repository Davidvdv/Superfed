/*
	Met var is de variable niet buiten de functie te benaderen, dus private.
	Met bijvoorbeeld this.getName = function() is wel te benaderen dus public, 
	wanneer je function getName() in een class zou doen is die private
*/

function Presentation( pName ) {
	
	var name = pName;
	var slides = new Array();
	var currentSlideId = 0;
	var currentParentId = 0;

	/* Stuur het aantal slides terug */
	this.amountOfSlides = function() {
		return slides.length;
	}

	this.getCurrentParentId = function() {
		return currentParentId;	
	}

	this.getCurrentSlideId = function() {
		return currentSlideId;	
	}

	this.getName = function() {
		return name;	
	}

	this.getSlide = function() {
		return slides[currentParentId];
	}

	this.previousSlide = function() {
		currentParentId--;
	}

	this.nextSlide = function() {
		currentParentId += 1;
	}

	this.upSlide = function() {
		currentSlideId--;
	}

	this.downSlide = function() {
		currentSlideId++;
	}

	/* Voegt een nieuwe slide toe aan de array met slides */
	this.addSlide = function(slide) {
		slides.push(slide);
	}
}