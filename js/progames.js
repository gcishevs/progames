$(function() 
{

	var paper = Raphael('paper', 300, 300);

	var rect;

	var text;

    var interval;

	var c_fillMatch = {	fill: "red"	};

	var count = 0;

	var time = 4000;

	var countCheck = 5;

	$('#value').focus();

	var set = paper.set();


	function moveAnimation() 

	{
		animC = Raphael.animation({	cy: 280	}, 4000, "bounce", function() 
		{
			this.remove();
		});

		anim = Raphael.animation({ y: 280}, 4000, "bounce", function() 
		{
			this.remove();
		});
	}

	var anim = Raphael.animation(animParam, 2000);
	var animParam = {y: 300	};

	var animC = Raphael.animation(animParamC, 2000);
	var animParamC = {cy: 300 };


	function createSet() 
	{
        $('#paper').removeClass("success");
        $('#paper').removeClass("error");
       // $('#value').val('');
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
		rect.data('value', superValue);
		text.attr(t_fill);

		set.push(rect, text);

		

		moveAnimation();
		rect.animate(animC);
		text.animateWith(rect, animParam, anim);


		if(count >= countCheck)
		{
			if(time >1000)
			{
				time -= 500;
			}
			clearInterval(interval);
        	interval = setInterval(createSet, time);
        	countCheck += 5;
		}	


	}

	createSet();

	interval = setInterval(createSet, time);

	function stop() {
		var value = $('#value').val();

set.forEach(function(elem)
{
	if (value == elem.data("value")) 
	{
			count += 0.5;
			$('#paper').addClass("success");
			elem.remove();
			$('#value').val('');
	}
	else
		{
			$('#paper').addClass("error");
			$('#value').val('');
		}

})
		


	}

	$('#enter').click(function() 
	{
		stop();
	});


	$(document).keydown(function(event) {
		if (event.keyCode == 13) {
			stop();
			

		}
	});

	function getRandom(min, max) {
		return min + Math.floor(Math.random() * (max - min + 1));
	}

});