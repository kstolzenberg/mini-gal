/*//expand thumbnail
	$("#first img").click(function(){
		$("#first img").css("height","500");
	});
//reduce thumbnail
	$("#backdrop").click(function(){
		$("#first img").css("height","200");
});
*/

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

		var arrName = [];

		//this this should only pull by div, but is pulling all images! try .each? don't pull img in html?
		//review logs and dynamic html - strange things are getting applied
		//don't know if display with fuck with things?
		//worked as ("project1" img) explicit target and image.
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
		console.log(arrName);
		console.log(arrClass);
		console.log(arrClassOffset);
		console.log(arrZip);


		$.each(arrZip, function(index, value) {
			$(value[0]).click(function() {
				$(this).hide();
				$(value[1]).show();
				});
			});
	};

}(jQuery));
	

