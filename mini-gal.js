function zip(arrayA, arrayB) {
    var length = Math.min(arrayA.length, arrayB.length);
    var result = [];
    for (var n = 0; n < length; n++) {
        result.push([arrayA[n], arrayB[n]]);
    }
    return result;
}

$(document).ready(function(){

	//expand thumbnail
	$("#first img").click(function(event){
		event.stopImmediatePropagation();
		$("#first img").css("height","500");
	});

	//reduce thumbnail
	$("#backdrop").click(function(){
		$("#first img").css("height","200");
	});

	//below loops over images in div
	var First = [];

	$("#first img").each(function(){
		First.push($(this).attr("class"))});

	var FirstArr = [];
	var FirstArr2 = [];
	
	$.each(First, function(index, value) {
  		FirstArr.push("."+value);
		});

	var FirstArr2 = FirstArr.slice(0);
	var FirstVal  = FirstArr2.shift();
	FirstArr2.push(FirstVal);

	var ArrResult = zip(FirstArr,FirstArr2);
	console.log(ArrResult);


	$.each(ArrResult, function(index, value) {
		$(value[0]).click(function() {
			$(this).hide();
			$(value[1]).show();
			});
	});

});

//wrap into a function that accepts a div as input
//opacity hover on image? need to build in actually grid to get scale
//need to add thumbnail-basic lightbox uses jquery to change a divs .css("displace","block") to show/not show
//close big image = click on background and change css back to thumbnail>bound to overall div!
//need a spacer? right now skipping over first image? or the first image is always a thumb? because on click is trigger 2 things
//add html image caption to the side of each image, with title and description.
//others: use separate thumbnail images, no css, then inject css with jquery with the next one? would also solve event binding?

