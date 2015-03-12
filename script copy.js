$(document).ready(function() {

var sq1 = $('#square1');
var sq2 = $('#square2');
var sq3 = $('#square3');
var sq4 = $('#square4');
var sq5 = $('#square5');
var sq6 = $('#square6');
var sq7 = $('#square7');
var sq8 = $('#square8');
var sq9 = $('#square9');

var playValid = false;


function validatePlay(squareplayed) {
	if ( $(squareplayed).hasClass('free') ) {
		playValid = true;
	} else {
		playValid = false;
		return false;
	}
}

function clearBoard() {
	$('.tile').removeClass('played');
	$('.tile').removeClass('O-play');
	$('.tile').removeClass('X-play');
	$('.tile').html('');
	$('.tile').addClass('free');
}

function winAlert(player) {
	alert(player+" wins!");
	clearBoard();
}

function checkWin() {

	if ( sq1.hasClass('X-play') && sq2.hasClass('X-play') && sq3.hasClass('X-play') ) {
		winAlert("X");
	} if ( sq1.hasClass('O-play') && sq2.hasClass('O-play') && sq3.hasClass('O-play') ) {
		winAlert("O");
	}

	if ( sq4.hasClass('X-play') && sq5.hasClass('X-play') && sq6.hasClass('X-play') ) {
		winAlert("X");
	} if ( sq4.hasClass('O-play') && sq5.hasClass('O-play') && sq6.hasClass('O-play') ) {
		winAlert("O");
	}

	if ( sq7.hasClass('X-play') && sq8.hasClass('X-play') && sq9.hasClass('X-play') ) {
		winAlert("X");
	} if ( sq7.hasClass('O-play') && sq8.hasClass('O-play') && sq9.hasClass('O-play') ) {
		winAlert("O");
	}

	if ( sq1.hasClass('X-play') && sq4.hasClass('X-play') && sq7.hasClass('X-play') ) {
		winAlert("X");
	} if ( sq1.hasClass('O-play') && sq4.hasClass('O-play') && sq7.hasClass('O-play') ) {
		winAlert("O");
	}

	if ( sq5.hasClass('X-play') && sq2.hasClass('X-play') && sq8.hasClass('X-play') ) {
		winAlert("X");
	} if ( sq5.hasClass('O-play') && sq2.hasClass('O-play') && sq8.hasClass('O-play') ) {
		winAlert("O");
	}

	if ( sq6.hasClass('X-play') && sq9.hasClass('X-play') && sq3.hasClass('X-play') ) {
		winAlert("X");
	} if ( sq6.hasClass('O-play') && sq9.hasClass('O-play') && sq3.hasClass('O-play') ) {
		winAlert("O");
	}

	if ( sq1.hasClass('X-play') && sq5.hasClass('X-play') && sq9.hasClass('X-play') ) {
		winAlert("X");
	} if ( sq1.hasClass('O-play') && sq5.hasClass('O-play') && sq9.hasClass('O-play') ) {
		winAlert("O");
	}

	if ( sq5.hasClass('X-play') && sq7.hasClass('X-play') && sq3.hasClass('X-play') ) {
		winAlert("X");
	} if ( sq5.hasClass('O-play') && sq7.hasClass('O-play') && sq3.hasClass('O-play') ) {
		winAlert("O");
	}
}






function Oplay() {


	if ( sq1.hasClass('X-play') && sq2.hasClass('X-play') ) {
		
		var tacticalSquare = sq3
		validatePlay(tacticalSquare);

		if (playValid) {

			tacticalSquare.removeClass('free');
			tacticalSquare.addClass('played');
			tacticalSquare.addClass('O-play');
			tacticalSquare.html("O");
		} 
		
	} else {

		for (var i = 0; i < 10; i++) {
		// Loop to find a valid play
		
			var randomNumber = Math.floor((Math.random() * 9) + 1);
			var randomSquare = $('#square'+randomNumber);
			validatePlay(randomSquare);

			if (playValid) {

				randomSquare.removeClass('free');
				randomSquare.addClass('played');
				randomSquare.addClass('O-play');
				randomSquare.html("O");
				break;
			} 
		}


	}



	



	checkWin();
}

$('.tile').on('click', function Xplay() {

	validatePlay(this);

	if (playValid) {
		$(this).removeClass('free');
		$(this).addClass('played');
		$(this).addClass('X-play');
		$(this).html("X");

		Oplay();

	} else {
		alert("That square has already been played. Please choose another square");
	}
	
})

$('#reset-button').on('click', function() {
	clearBoard();
})


}); // end document ready
