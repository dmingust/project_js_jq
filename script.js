$(document).ready(function(){
	//for (var i = 0; i < 16; i++) {
	//	$(".wrapper").append('<div class="gridBox"></div>');
	//};
	n = 16;
	createGrid(n);
	createTrail();

});


function createTrail(){
	$('.gridBox').hover(
		function() {
			$(this).addClass('on');
		},
		function() {
			$(this).addClass('off');
		}
		);
}

function clearBoard() {
	$('.gridBox').removeClass('on');
	$('.gridBox').removeClass('off');
	$("tr").remove();
	
	numSides = prompt("How many squares per side would you like?");
	createGrid(numSides);
	createTrail();
}

function createGrid(size){

	for(i = 0; i < size; i++){
		$tr = $('<tr></tr>');
		for(j = 0; j < size; j++){
			$div = $("<div class='gridBox'></div>");
			$tr.append($("<td></td>").append($div));
		}
		$(".wrapper").append($tr);
	}
}