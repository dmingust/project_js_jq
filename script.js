$(document).ready(function(){
	for (var i = 0; i < 16; i++) {
		$(".wrapper").append('<div class="gridBox"></div>');
	};
	$('.gridBox').hover(
		function() {
			$(this).addClass('on');
		},
		function() {
			$(this).addClass('off');
		}
		);
	
});