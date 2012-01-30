function Galgje() {
	
	var letters = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
	var list = new Array('PROTOTYPE','JAVASCRIPT','TESTING','USABILITY','SCENARIO');
	
	var displayWord;
	var word;
	var galgStatus;
	var correctCounter;
	var drawer = new Drawer();
	
	this.getDisplayWord = function() { return displayWord.join('');	}
	this.getWord = function(){ return word; }
	this.getCorrectCounter = function() { return correctCounter; }
	this.setCorrectCounter = function(increment) { correctCounter += increment; }
	this.setGalgStatus = function(decrement) { galgStatus += decrement; }
	this.setLetterInDisplayWord = function( position, letter ) { displayWord[position] = letter; }
	this.getDrawer = function(){ return drawer; }
	
	this.begin = function() {
		
		galgStatus = 10;
		correctCounter = 0;
		displayWord = new Array();

		var random = Math.floor( Math.random() * list.length);
		word = list[random];
		
		$('#letters').empty();
		
		for(letter in letters) {
			$('#letters').append('<button type="button">'+letters[letter]+'</button>');
		}
		
		for(var i = 0; i < word.length; i++ ){
			displayWord.push(' _ ');
		}		
	}
	
	this.isWon = function() {
		if(correctCounter == word.length){
			return true;
		}else { return false; }
	}
	
	this.isLost = function() {
		if(galgStatus == 0) {
			return true;
		} else { return false; }
	}
	
	this.galgPart = function() {
		switch(galgStatus) {
			case 9:
				drawer.grond();
			break;
			case 8:
				drawer.paal();
			break;
			case 7:
				drawer.balk();
			break;
			case 6:
				drawer.strop();
			break;
			case 5:
				drawer.hoofd();
			break;
			case 4:
				drawer.romp();
			break;
			case 3:
				drawer.leftArm();
			break;
			case 2:
				drawer.rightArm();
			break;
			case 1:
				drawer.leftLeg();
			break;
			case 0:
				drawer.rightLeg();
			break;
			
			default:
				alert('Er gaat iets mis!');
			break;
		}
	}
}