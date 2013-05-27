$(document).ready(function(){

	var First = [];

	$("#first img").each(function(){
		First.push($(this).attr("class"))});

	console.log(First);
	console.log((First[2]));

	$.each([[".img1", ".img2"], [".img2", ".img3"], [".img3", ".img4"]], function(index, value) {
	  $(value[0]).click(function() {
	  	$(this).hide();
	  	$(value[1]).show();
	 	});
	});
 
});

//need to scale for other thumbnails?
//need a condition that checks if it's the last image - loop back to #1
//need to accept keyboard arrowing at somepoint? nice to have

// goal: change image on click, have a caption adjacent to the image

