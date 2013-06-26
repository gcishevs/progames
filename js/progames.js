$(function() {

	var paper = Raphael('paper', 300, 300);

	var rect;

	var text;

	var interval;

	var count = 0;

	var time = 4000;

	var countCheck = 5;

	$('#value').focus();

	var set = paper.set();

	createSet();

	interval = setInterval(createSet, time);

	$('#enter').click(function() {
		stop();
	});


	$(document).keydown(function(event) {
		if (event.keyCode == 13) {
			stop();
		}
	});



	function moveAnimation()

	{

		

      	animC = Raphael.animation({
			cy: 280
		}, 4000, "bounce", function() {
			this.remove();
		});

		anim = Raphael.animation({
			y: 280
		}, 4000, "bounce", function() {
			this.remove();
		});

		animB = Raphael.animation({
			path: _transformedPath
		}, 4000, "bounce", function() {
			this.remove();
		});


	}

	var randomBX = getRandom(30, 250);

	var _transformedPath = Raphael.transformPath('M14.615,4.928c0.487-0.986,1.284-0.986,1.771,0l2.249,4.554c0.486,0.986,1.775,1.923,2.864,2.081l5.024,0.73c1.089,0.158,1.335,0.916,0.547,1.684l-3.636,3.544c-0.788,0.769-1.28,2.283-1.095,3.368l0.859,5.004c0.186,1.085-0.459,1.553-1.433,1.041l-4.495-2.363c-0.974-0.512-2.567-0.512-3.541,0l-4.495,2.363c-0.974,0.512-1.618,0.044-1.432-1.041l0.858-5.004c0.186-1.085-0.307-2.6-1.094-3.368L3.93,13.977c-0.788-0.768-0.542-1.525,0.547-1.684l5.026-0.73c1.088-0.158,2.377-1.095,2.864-2.081L14.615,4.928z', 'T' + randomBX + ',260');

	var anim = Raphael.animation(animParam, 2000);
	var animParam = {
		y: 300
	};

	var animB = Raphael.animation(animParamB, 2000);
	var animParamB = {
		path: _transformedPath
	};

	var animC = Raphael.animation(animParamC, 2000);
	var animParamC = {
		cy: 300
	};


	function createSet() {
		$('#paper').removeClass("success");
		$('#paper').removeClass("error");
		$('#value').focus();

		var c_fill = {
			fill: '#2980B9',
			cursor: "pointer"
		};

		var t_fill = {
			fill: "white",
			'font-size': "15"
		};

		var randomNum1 = getRandom(1, 9);

		var randomNum2 = getRandom(1, 9)

		var randomX = getRandom(30, 250);

		var answer = randomNum1 * randomNum2;

		var question = randomNum1 + " x " + randomNum2;

		rect = paper.circle(randomX, 10, 20);
		rect.attr(c_fill);
		var ball = paper.path("M14.615,4.928c0.487-0.986,1.284-0.986,1.771,0l2.249,4.554c0.486,0.986,1.775,1.923,2.864,2.081l5.024,0.73c1.089,0.158,1.335,0.916,0.547,1.684l-3.636,3.544c-0.788,0.769-1.28,2.283-1.095,3.368l0.859,5.004c0.186,1.085-0.459,1.553-1.433,1.041l-4.495-2.363c-0.974-0.512-2.567-0.512-3.541,0l-4.495,2.363c-0.974,0.512-1.618,0.044-1.432-1.041l0.858-5.004c0.186-1.085-0.307-2.6-1.094-3.368L3.93,13.977c-0.788-0.768-0.542-1.525,0.547-1.684l5.026-0.73c1.088-0.158,2.377-1.095,2.864-2.081L14.615,4.928z");

		ball.attr({  
    		fill: '90-#526c7a-#64a0c1',
    		'fill-opacity': 0.5,
             stroke: 'orange'
		});


		text = paper.text(randomX, 10, question);
		text.data('value', answer);
		ball.data('value', answer);
		rect.data('value', answer);
		text.attr(t_fill);
		

		set.push(ball, rect, text);


		moveAnimation();
		ball.animate(animB);
		text.animateWith(ball, animParam, anim);
		rect.animateWith(text, animParamC, animC);


		if (count >= countCheck) {
			if (time > 1000) {
				time -= 500;
			}
			clearInterval(interval);
			interval = setInterval(createSet, time);
			countCheck += 5;
		}


	}


	function stop() {
		var value = $('#value').val();

		set.forEach(function(elem) {
			if (value == elem.data("value")) {
				count += 0.5;
				$('#paper').addClass("success");
				elem.remove();
				$('#value').val('');
			} else {
				$('#paper').addClass("error");
				$('#value').val('');
			}

		})
	}

	
	function getRandom(min, max) {
		return min + Math.floor(Math.random() * (max - min + 1));
	}

});