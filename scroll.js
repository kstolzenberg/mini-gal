$(document).ready(function(){

	/*$(".img1").click(function(){
		$(".img1").attr("src","test2.jpg");
	});*/

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
});



/* goal: change image on click, have a caption adjacent to the image, fake-it-light box, arrow navigation. 
style the cursor to be clear nav
 
this changed everything
	$("#first").click(function(){
		$(".img").each(function(){
			console.log($(this).attr("src"));
			$(this).attr("src", parent;		
		});
	});
or count + file name > make a string?
uses CSS display:none/display:block to rotate through dynamically generate text on click != display:none  make social icons*/
