$(function(){
	
	var operation, result;

	$("#button").click(function(){
		
		operation = $("#input").val();
		
		if(operation!=""){
			
			$('#tbody').append(`<tr><td>${operation}</td></tr>`);
			
			result = parseInt($('#balance').text(), 10) + parseInt(operation);
			
			$('#balance').text(result.toString());
			
			$("#input").val("");
		
		}
		
	});

});