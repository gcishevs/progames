$(function() 
{

	var paper = Raphael('paper', 300, 300);

	var rect;

	var text;

	var c_fillMatch = {	fill: "red"	};

	$('#value').focus();


	function moveAnimation() 
	{
		animC = Raphael.animation({	cy: 280	}, 3000, "bounce", function() 
		{
			this.remove();
		});

		anim = Raphael.animation({ y: 280}, 3000, "bounce", function() 
		{
			this.remove();
		});
	}

	var anim = Raphael.animation(animParam, 2000);
	var animParam = {y: 300	};

	var animC = Raphael.animation(animParamC, 2000);
	var animParamC = {cy: 300 };


	function createSet() {

		$('#value').focus();
		var c_fill = {fill: '#2980B9',cursor: "pointer"	};

		var t_fill = {fill: "white",'font-size': "15" };

		var randomNum1 = getRandom(1, 9);

		var randomNum2 = getRandom(1, 9)

		var randomX = getRandom(30, 250);

		var superValue = randomNum1 * randomNum2;

		var superText = randomNum1 + " x " + randomNum2;


		rect = paper.circle(randomX, 10, 20);
		rect.attr(c_fill);
		text = paper.text(randomX, 10, superText);
		text.data('value', superValue);
		text.attr(t_fill);
		moveAnimation();
		rect.animate(animC);
		text.animateWith(rect, animParam, anim);


	}

	createSet();

	setInterval(createSet, 3000);

	function stop() {
		var value = $('#value').val();

		if (value == text.data("value")) {
			text.attr(c_fillMatch);
			rect.remove();
			text.remove();
			$('#value').val('');

		}


	}

	$('#enter').click(function() {
		stop();
	});


	$(document).keydown(function(event) {
		if (event.keyCode == 13) {
			stop()
		}
	});

	function getRandom(min, max) {
		return min + Math.floor(Math.random() * (max - min + 1));
	}

});