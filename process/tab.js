$(document).ready(function(){

    $('img').on({
    'click': function() {
         var src = ($(this).attr('src') === 'img1_on.jpg')
            ? 'img2_on.jpg'
            : 'img1_on.jpg';
         $(this).attr('src', src);
    }

	});
});