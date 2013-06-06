(function($){

	$.fn.mini_gal = function(){

		function zip(arrayA, arrayB) {
		    var length = Math.min(arrayA.length, arrayB.length);
		    var result = [];
		    for (var n = 0; n < length; n++) {
		        result.push([arrayA[n], arrayB[n]]);
		    }
		    return result;
			}

		//expand thumbnail - need to hide all others so float doesn't screw up?
		$(this).click(function(){
			$(this).children("img").css({width:624, height:"auto"});
		});

		var gallery = $(this).children("img");

		//reduce thumbnail
		$("#backdrop").click(function(){
			$(gallery).css({width:200, height:"auto"});
		});

		//rotate through images
		var arrName = [];

		$(this).children("img").each(function(){
			arrName.push($(this).attr("class"))
			});

		var arrClass = [];
		var arrClassOffset = [];
			
		$.each(arrName, function(index, value) {
			arrClass.push("."+value);
			});

		var arrClassOffset = arrClass.slice(0);
		var offsetVal  = arrClassOffset.shift();
		arrClassOffset.push(offsetVal);

		var arrZip = zip(arrClass,arrClassOffset);

		$.each(arrZip, function(index, value) {
			$(value[0]).click(function() {
				$(this).hide();
				$(value[1]).show();
				});
			});
	};

}(jQuery));
	

