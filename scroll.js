$(document).ready(function(){

	$(".img1").click(function(){
		$(".img1").attr("src","test2.jpg");
	});

	$(".img2").click(function(){
		$(".img2").attr("src","test3.jpg");
	});

	$(".img3").click(function(){
		$(".img3").attr("src","test1.jpg");
	});


	/*$
	for (var i>0; i<4; i++){
		var imgB = $(".img3" + "i");
		console.log(imgB);
		(imgB).click(function(){
			$(imgB).attr("src","test3.jpg");
		});
	};


	$(".third").click(function(){
		$("img").each(function(){
			if (img !=) 
				$(this).attr("display","display:none");
			else{().attr("display","display:block")};		

		});*/

});


/* goal: change image on click, have a caption adjacent to the image, fake-it-light box, arrow navigation. 
style the cursor to be clear nav
multiple clicks? jquery .each
or count + file name > make a string?
uses CSS display:none/display:block to rotate through dynamically generate text on click != display:none  make social icons*/
