$(document).ready(function(){

	var First = [];

	$("#first img").each(function(){
    	First.push($(this).attr("class"))});

	console.log(First);
	console.log((First[2]));


	/* The Goal

	for (var i=0; i<=First.length; i++) {
		$(First[i]).click(function() {
			$(this).hide();
			$(First[i++]).show();
		if (i == First.length)
			{$(First[i]).click(function() {
			$(this).hide();
			$(First[0]).show();
			})};
		})};
	*/

 	$(".img1").click(function() {
      $(this).hide();
      $(".img2").show();
    	});
 	$(".img2").click(function() {
      $(this).hide();
      $(".img3").show();
    	});
 	$(".img3").click(function() {
      $(this).hide();
      $(".img4").show();
      	});
    $(".img4").click(function() {
      $(this).hide();
      $(".img5").show();
    	});
    $(".img5").click(function() {
      $(this).hide();
      $(".img1").show();
    	});
});
 

//need to scale for other thumbnails?
//need a condition that checks if it's the last image - loop back to #1
//need to accept keyboard arrowing at somepoint? nice to have

// goal: change image on click, have a caption adjacent to the image

