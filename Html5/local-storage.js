$(document).ready(function(){
	$("#form1").submit(function() {
		localStorage.setItem('superfed', $('textarea').val());
		localStorage.setItem('timestamp', (new Date()).getTime());
		return false;
	});
	
	$("#form2").submit(function() {

		var jsonObj = { 'titleText': $('#title').val(), 'someText': $('#textarea').val() };
		localStorage.setItem('titleText' , jsonObj.titleText);
		localStorage.setItem('someText' , jsonObj.someText);
		//localStorage.setItem('superfedJSON' , JSON.stringify(jsonObj));
		
		return false;
	});
	$('.local-storage').text(localStorage.getItem('superfed') +' - '+ localStorage.getItem('timestamp'));
	
	var createJson = { 'titleText': localStorage.getItem('titleText'), 'someText': localStorage.getItem('someText') };
	$('.local-storage-json').text('JSON string:'+ JSON.stringify(createJson) );
	
});