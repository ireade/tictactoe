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
	} else if ( sq1.hasClass('O-play') && sq2.hasClass('O-play') && sq3.hasClass('O-play') ) {
		winAlert("O");
	}

	else if ( sq4.hasClass('X-play') && sq5.hasClass('X-play') && sq6.hasClass('X-play') ) {
		winAlert("X");
	} else if ( sq4.hasClass('O-play') && sq5.hasClass('O-play') && sq6.hasClass('O-play') ) {
		winAlert("O");
	}

	else if ( sq7.hasClass('X-play') && sq8.hasClass('X-play') && sq9.hasClass('X-play') ) {
		winAlert("X");
	} else if ( sq7.hasClass('O-play') && sq8.hasClass('O-play') && sq9.hasClass('O-play') ) {
		winAlert("O");
	}

	else if ( sq1.hasClass('X-play') && sq4.hasClass('X-play') && sq7.hasClass('X-play') ) {
		winAlert("X");
	} else if ( sq1.hasClass('O-play') && sq4.hasClass('O-play') && sq7.hasClass('O-play') ) {
		winAlert("O");
	}

	else if ( sq5.hasClass('X-play') && sq2.hasClass('X-play') && sq8.hasClass('X-play') ) {
		winAlert("X");
	} else if ( sq5.hasClass('O-play') && sq2.hasClass('O-play') && sq8.hasClass('O-play') ) {
		winAlert("O");
	}

	else if ( sq6.hasClass('X-play') && sq9.hasClass('X-play') && sq3.hasClass('X-play') ) {
		winAlert("X");
	} else if ( sq6.hasClass('O-play') && sq9.hasClass('O-play') && sq3.hasClass('O-play') ) {
		winAlert("O");
	}

	else if ( sq1.hasClass('X-play') && sq5.hasClass('X-play') && sq9.hasClass('X-play') ) {
		winAlert("X");
	} else if ( sq1.hasClass('O-play') && sq5.hasClass('O-play') && sq9.hasClass('O-play') ) {
		winAlert("O");
	}

	else if ( sq5.hasClass('X-play') && sq7.hasClass('X-play') && sq3.hasClass('X-play') ) {
		winAlert("X");
	} else if ( sq5.hasClass('O-play') && sq7.hasClass('O-play') && sq3.hasClass('O-play') ) {
		winAlert("O");
	}

	else {
		console.log("No win yet")
	}
}






function Oplay() {


	function Oplaying(square) {

		validatePlay(square)

		if (playValid) {

			square.removeClass('free');
			square.addClass('played');
			square.addClass('O-play');
			square.html("O");
		} else {
			Orandomplay()
		}

	}

	function Orandomplay() {
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


	// Win 1 2 3
	if ( !(sq1.hasClass('played') && sq2.hasClass('played') && sq3.hasClass('played')) ) {

		alert("Squares 1 + 2 +3 together have not been played yet")
		if ( sq1.hasClass('X-play') && sq2.hasClass('X-play') || sq1.hasClass('O-play') && sq2.hasClass('O-play') ) {
			Oplaying(sq3)
			console.log("Win 123");
		} else if ( sq1.hasClass('X-play') && sq3.hasClass('X-play') || sq1.hasClass('O-play') && sq3.hasClass('O-play') ) {
			Oplaying(sq2)
			console.log("Win 123");
		} else if ( sq3.hasClass('X-play') && sq2.hasClass('X-play') || sq3.hasClass('O-play') && sq2.hasClass('O-play') ) {
			Oplaying(sq1)
			console.log("Win 123");
		} 
	}


	

	// Win 4 5 6
	else if ( !(sq4.hasClass('played') && sq5.hasClass('played') && sq6.hasClass('played')) ) {
		if ( sq4.hasClass('X-play') && sq5.hasClass('X-play') || sq4.hasClass('O-play') && sq5.hasClass('O-play') ) {
			Oplaying(sq6)
		} else if ( sq4.hasClass('X-play') && sq6.hasClass('X-play') || sq4.hasClass('O-play') && sq6.hasClass('O-play') ) {
			Oplaying(sq5)
		} else if ( sq5.hasClass('X-play') && sq6.hasClass('X-play') || sq5.hasClass('O-play') && sq6.hasClass('O-play') ) {
			Oplaying(sq4)
		} 
	}

	// Win 7 8 9 
	else if ( !(sq7.hasClass('played') && sq8.hasClass('played') && sq9.hasClass('played')) ) {
		if ( sq7.hasClass('X-play') && sq8.hasClass('X-play') || sq7.hasClass('O-play') && sq8.hasClass('O-play') ) {
			Oplaying(sq9)
		} else if ( sq7.hasClass('X-play') && sq9.hasClass('X-play') || sq7.hasClass('O-play') && sq9.hasClass('O-play') ) {
			Oplaying(sq8)
		} else if ( sq8.hasClass('X-play') && sq9.hasClass('X-play') || sq8.hasClass('O-play') && sq9.hasClass('O-play') ) {
			Oplaying(sq7)
		}
	}

	// Win 1 4 7
	else if ( !(sq1.hasClass('played') && sq4.hasClass('played') && sq7.hasClass('played')) ) {
		if ( sq1.hasClass('X-play') && sq4.hasClass('X-play') || sq1.hasClass('O-play') && sq4.hasClass('O-play') ) {
			Oplaying(sq7)
		} else if ( sq1.hasClass('X-play') && sq7.hasClass('X-play') || sq1.hasClass('O-play') && sq7.hasClass('O-play') ) {
			Oplaying(sq4)
		} else if ( sq4.hasClass('X-play') && sq7.hasClass('X-play') || sq4.hasClass('O-play') && sq7.hasClass('O-play') ) {
			Oplaying(sq1)
		}
	}


	// Win 5 2 8
	else if ( !(sq5.hasClass('played') && sq2.hasClass('played') && sq8.hasClass('played')) ) {
		if ( sq5.hasClass('X-play') && sq2.hasClass('X-play') || sq5.hasClass('O-play') && sq2.hasClass('O-play') ) {
			Oplaying(sq8)
		} else if ( sq5.hasClass('X-play') && sq8.hasClass('X-play') || sq5.hasClass('O-play') && sq8.hasClass('O-play') ) {
			Oplaying(sq2)
		} else if ( sq2.hasClass('X-play') && sq8.hasClass('X-play') || sq2.hasClass('O-play') && sq8.hasClass('O-play') ) {
			Oplaying(sq5)
		} 
	}

	// Win 6 9 3
	else if ( !(sq6.hasClass('played') && sq9.hasClass('played') && sq3.hasClass('played')) ) {
		if ( sq6.hasClass('X-play') && sq9.hasClass('X-play') || sq6.hasClass('O-play') && sq9.hasClass('O-play') ) {
			Oplaying(sq3)
		} else if ( sq6.hasClass('X-play') && sq3.hasClass('X-play') || sq6.hasClass('O-play') && sq3.hasClass('O-play') ) {
			Oplaying(sq9)
		} else if ( sq9.hasClass('X-play') && sq3.hasClass('X-play') || sq9.hasClass('O-play') && sq3.hasClass('O-play') ) {
			Oplaying(sq6)
		}
	}


	// Win 1 5 9
	else if ( !(sq1.hasClass('played') && sq5.hasClass('played') && sq9.hasClass('played')) ) {
		if ( sq1.hasClass('X-play') && sq5.hasClass('X-play') || sq1.hasClass('O-play') && sq5.hasClass('O-play') ) {
			Oplaying(sq9)
		} else if ( sq1.hasClass('X-play') && sq9.hasClass('X-play') || sq1.hasClass('O-play') && sq9.hasClass('O-play') ) {
			Oplaying(sq5)
		} else if ( sq5.hasClass('X-play') && sq9.hasClass('X-play') || sq5.hasClass('O-play') && sq9.hasClass('O-play') ) {
			Oplaying(sq1)
		} 
	}

	// Win 5 7 3
	else if ( !(sq5.hasClass('played') && sq7.hasClass('played') && sq3.hasClass('played')) ) {
		if ( sq5.hasClass('X-play') && sq7.hasClass('X-play') || sq5.hasClass('O-play') && sq7.hasClass('O-play') ) {
			Oplaying(sq3)
		} else if ( sq5.hasClass('X-play') && sq3.hasClass('X-play') || sq5.hasClass('O-play') && sq3.hasClass('O-play') ) {
			Oplaying(sq7)
		} else if ( sq7.hasClass('X-play') && sq3.hasClass('X-play') || sq7.hasClass('O-play') && sq3.hasClass('O-play') ) {
			Oplaying(sq5)
		} 
	}


	else {
		Orandomplay();
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

		checkWin();
		Oplay();

	} else {
		alert("That square has already been played. Please choose another square");
	}
	
})

$('#reset-button').on('click', function() {
	clearBoard();
})


}); // end document ready
