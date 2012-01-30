function Player(name) {
	
	var playerName = name;
	var won = 0;
	var lost = 0;
	
	this.getPlayerName = function() { return playerName; }
	this.getWon = function() { return won; }
	this.getLost = function() { return lost; }
	this.hasLost = function() { lost++; }
	this.hasWon = function() { won++; }
}