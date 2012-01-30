function Word() {

	var list = new Array('prototype','javascript','testing','usability','scenario');
		
	var random = Math.round( Math.random() * list.length-1);
	return list[random];
}