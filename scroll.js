function zip(arrayA, arrayB) {
    var length = Math.min(arrayA.length, arrayB.length);
    var result = [];
    for (var n = 0; n < length; n++) {
        result.push([arrayA[n], arrayB[n]]);
    }
    return result;
}

$(document).ready(function(){

	var First = [];

	$("#first img").each(function(){
		First.push($(this).attr("class"))});

	//console.log(First);

	//["img1", "img2", "img3", "img4", "img5"]
	//[".img1", ".img2", ".img3", ".img4", ".img5"]
	//[[".img1", ".img2"], [".img2", ".img3"], [".img3", ".img4"], [".img4", ".img5"], [".img5", ".img1"]]
	var FirstArr = [];
	var FirstArr2 = [];
	
	$.each(First, function(index, value) {
  		FirstArr.push("."+value);
		});

	var FirstArr2 = FirstArr.slice(0);
	var FirstVal  = FirstArr2.shift();
	FirstArr2.push(FirstVal);

	var ArrResult = zip(FirstArr,FirstArr2);

	console.log(FirstArr);
	console.log(FirstArr2);
	console.log(ArrResult);


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

