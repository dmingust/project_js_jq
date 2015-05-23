$(document).ready(function(){
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
	numSides = prompt("How many squares per side would you like?");

	$('.gridBox').removeClass('on');
	$('.gridBox').removeClass('off');
	$("tr").remove();

	createGrid(numSides);
	createTrail();
}

function createGrid(size){
	var $sketchpad = $('.sketchpad');
	var padHeight = $($sketchpad).height();
	var padWidth = $($sketchpad).width();

//First grid attempt
	/*for(i = 0; i < size; i++){
		$tr = $('<tr></tr>');
		for(j = 0; j < size; j++){
			$div = $("<div class='gridBox'></div>");
			$tr.append($("<td></td>").append($div));
		}
		$(".sketchpad").append($tr);
	}*/

//Improved grid
	var padRow = "";

	for(var i = 0; i < size; i++) {
			padRow += "<div class='gridBox'></div>";
		};

		for(var i = 0; i < size; i++) {
			$($sketchpad).append(padRow);
		};

	$gridBox = $('.gridBox');
	var gridH = (padHeight / size) + "px";
	var gridW = (padWidth / size) + "px";

	$($gridBox).css('height', gridH);
	$($gridBox).css('width', gridW);
}