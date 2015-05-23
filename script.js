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

	// Clear board
	$('.sketchpad').html("");

	//$('.gridBox').removeClass('on');
	//$('.gridBox').removeClass('off');
	//$("tr").remove();

	createGrid(numSides);
	createTrail();
}

function rainbowMode(){
	numSides = prompt("How many squares per side would you like?");
	$('.sketchpad').html("");
	createGrid(numSides);
	rainbowTrail();
}

function rainbowTrail() {
	$('.gridBox').hover(
		function() {
			$(this).css("background-color", getRainbow());
		},
		function() {
			$(this).css("background-color", getRainbow());
		}
		);
}

function getRainbow() {
	var letters = '0123456789ABCDEF'.split('');
    	var color = '#';
    	for (var i = 0; i < 6; i++ ) {
        	color += letters[Math.floor(Math.random() * 16)];
    	}
    	return color;
	};

function createGrid(size){
	var $sketchpad = $('.sketchpad');
	var padHeight = $($sketchpad).height();
	console.log("padHeight = " + $($sketchpad).height());
	var padWidth = $($sketchpad).width();
	console.log("padWidth = " + $($sketchpad).width());

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
	console.log("gridH = " + (padHeight / size) + "px");
	var gridW = (padWidth / size) + "px";
	console.log("gridW = " + (padWidth / size) + "px");

	$($gridBox).css('height', gridH);
	$($gridBox).css('width', gridW);
}