$(function() {


	var width = $('#paper').width();

	var paper = Raphael('paper', width, 500);

	var rect;

	var text;

	var count = 0;

	var time = 4000;

	var countCheck = 5;

	var bonusX;

	var points = 0;

	var counts = 0;

	var success = 0;

	var fail = 0;

	var bonusY;

	var base_fill = {
		stroke: '#1ABC9C'
	};


	var lineLeft = paper.path("M{0} {1}L{2} {3}", 95, 5, 95, 497);

	/*var lineRight = paper.path("M{0} {1}L{2} {3}", (width - 2), 5, (width -2), 497);*/

	// var lineTop = paper.path("M{0} {1}L{2} {3}", 5, 2, width, 2);

	// var lineBottom = paper.path("M{0} {1}L{2} {3}", 5, 499, width, 499);

	lineLeft.attr(base_fill);
	/*lineRight.attr(base_fill);
	// lineTop.attr(base_fill);
	lineBottom.attr(base_fill);*/


	// var header_fill = {
	// 		fill: '#ECF0F1',
	// 		stroke: 'none'
	// 	};

	// 	var base_fill = {
	// 		fill: '#ECF0F1',
	// 		stroke: 'none',
	// 		'fill-opacity': 0.5
	// 	};

	// var pointsBase = paper.rect(20, 35, 65, 80);
	// var pointsHeader = paper.rect(20, 15, 65, 20);

	// pointsBase.attr(base_fill);
	// pointsHeader.attr(header_fill);

	// var countsBase = paper.rect(20, 35, 65, 80);
	// var countsHeader = paper.rect(20, 15, 65, 20);

	// countsBase.attr(base_fill);
	// countsHeader.attr(header_fill);

	var pointsText = paper.text(50, 25, 'points');

	var text_fill = {
		fill: '#E74C3C',
		"font-family": "Lato, sans-serif",
		'font-size': "15",
	};



	pointsText.attr(text_fill);

	var pointsValue = paper.text(50, 55, points);



	var value_fill = {
		fill: '#1ABC9C',
		"font-family": "Lato, sans-serif",
		'font-size': "30",
	};


	pointsValue.attr(value_fill);

	var countText = paper.text(50, 135, 'counts');


	countText.attr(text_fill);

	var countValue = paper.text(50, 165, counts);

	countValue.attr(value_fill);

	var successText = paper.text(50, 245, 'success');


	successText.attr(text_fill);

	var successValue = paper.text(50, 275, 0);

	successValue.attr(value_fill);

	var failText = paper.text(50, 355, 'fail');


	failText.attr(text_fill);

	var failValue = paper.text(50, 385, 0);

	failValue.attr(value_fill);

	var set = paper.set();

	$('#value').focus();

	createSet();

	var interval = setInterval(createSet, time);

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
			cy: 450
		}, 5000, "bounce", function() {
			animateFault(this.attr('cx'), 450);
			this.remove();

		});

		anim = Raphael.animation({
			y: 450
		}, 5000, "bounce", function() {
			this.remove();
		});

		// animB = Raphael.animation({
		// 	path: _transformedPath
		// }, 6000, function() {
		// 	this.remove();
		// });


	}

	//var randomBX = getRandom(30, width);

	//var _transformedPath = Raphael.transformPath('M14.615,4.928c0.487-0.986,1.284-0.986,1.771,0l2.249,4.554c0.486,0.986,1.775,1.923,2.864,2.081l5.024,0.73c1.089,0.158,1.335,0.916,0.547,1.684l-3.636,3.544c-0.788,0.769-1.28,2.283-1.095,3.368l0.859,5.004c0.186,1.085-0.459,1.553-1.433,1.041l-4.495-2.363c-0.974-0.512-2.567-0.512-3.541,0l-4.495,2.363c-0.974,0.512-1.618,0.044-1.432-1.041l0.858-5.004c0.186-1.085-0.307-2.6-1.094-3.368L3.93,13.977c-0.788-0.768-0.542-1.525,0.547-1.684l5.026-0.73c1.088-0.158,2.377-1.095,2.864-2.081L14.615,4.928z', 'T' + randomBX + ',260');

	var anim = Raphael.animation(animParam, 5000);
	var animParam = {
		y: 450
	};

	// var animB = Raphael.animation(animParamB, 2000);
	// var animParamB = {
	// 	path: _transformedPath
	// };

	var animC = Raphael.animation(animParamC, 5000);
	var animParamC = {
		cy: 450
	};


	function createSet() {



		counts += 1;

		updateCount(counts);

		$('#paper').removeClass("success");
		$('#paper').removeClass("error");
		$('#value').focus();

		var color = getColor();

		var c_fill = {
			fill: 'none',
			stroke: color,
			"stroke-width": 8
		};

		var t_fill = {
			fill: color,
			"font-family": "Lato, sans-serif",
			'font-size': "25",
		};

		var randomNum1 = getRandom(2, 9);

		var randomNum2 = getRandom(2, 9)

		var randomX = getRandom(105, (width - 55));

		var answer = randomNum1 * randomNum2;

		var question = randomNum1 + " x " + randomNum2;

		rect = paper.circle(randomX, 10, 50);
		rect.attr(c_fill);

		//var ball = paper.path("M14.615,4.928c0.487-0.986,1.284-0.986,1.771,0l2.249,4.554c0.486,0.986,1.775,1.923,2.864,2.081l5.024,0.73c1.089,0.158,1.335,0.916,0.547,1.684l-3.636,3.544c-0.788,0.769-1.28,2.283-1.095,3.368l0.859,5.004c0.186,1.085-0.459,1.553-1.433,1.041l-4.495-2.363c-0.974-0.512-2.567-0.512-3.541,0l-4.495,2.363c-0.974,0.512-1.618,0.044-1.432-1.041l0.858-5.004c0.186-1.085-0.307-2.6-1.094-3.368L3.93,13.977c-0.788-0.768-0.542-1.525,0.547-1.684l5.026-0.73c1.088-0.158,2.377-1.095,2.864-2.081L14.615,4.928z");

		// ball.attr({  
		//   		fill: '90-#526c7a-#64a0c1',
		//   		'fill-opacity': 0.5,
		//            stroke: 'orange'
		// });


		text = paper.text(randomX, 10, question);
		text.data('value', answer);
		rect.data('value', answer);
		text.attr(t_fill);


		set.push(rect, text);


		moveAnimation();
		rect.animate(animC);
		text.animateWith(rect, animParam, anim);



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

				if (elem.type == 'circle') {
					bonusX = elem.attr('cx');
					bonusY = elem.attr('cy');
					animateSuccess(bonusX, bonusY);
				}

				elem.remove();
				$('#value').val('');
			} else {
				$('#value').val('');
			}

		})
	}


	function animateSuccess(x, y) {
		var bonus = paper.text(x, y, "+10");

		var bonus_fill = {
			fill: "#1ABC9C",
			"font-family": "Lato, sans-serif",
			'font-size': "25"
		};

		bonus.attr(bonus_fill);

		bonusY = y - 50;

		bonus.animate({
			y: bonusY
		}, 2000, function() {
			this.remove();
		});

		points += 10;

		updatePoints(points);

		success += 1

		updateSuccess(success)


	}

	function animateFault(x, y) {
		var bonus = paper.text(x, y, "-10");

		var bonus_fill = {
			fill: "#E74C3C",
			"font-family": "Lato, sans-serif",
			'font-size': "25"
		};

		bonus.attr(bonus_fill);

		bonusY = y - 50;

		bonus.animate({
			y: bonusY
		}, 2000, function() {
			this.remove();
		});

		points -= 10;

		updatePoints(points);

		fail += 1

		updateFail(fail)


	}


	function getRandom(min, max) {
		return min + Math.floor(Math.random() * (max - min + 1));
	}

	function getColor() {
		//var colors = new Array("#2ECC71","#3498DB","#9B59B6","#34495E","#2980B9","#8E44AD","#F39C12","#D35400","#E67E22");
		var colors = new Array("#1ABC9C", "#3498DB", "#9B59B6", "#E74C3C", "#34495E");
		return colors[getRandom(0, 4)];
	}


	function updatePoints(text) {
		pointsValue.attr({
			text: text
		});
	}


	function updateCount(count) {


		var prCount = paper.text(0, 165, count);


		var prCount_fill = {
			fill: '#1ABC9C',
			"font-family": "Lato, sans-serif",
			'font-size': "30",
			'fill-opacity': '0.1'
		};


		prCount.attr(prCount_fill);

		var countAnimation = Raphael.animation({
			x: 90,
			'fill-opacity': 0.1
		}, 900, function() {
			this.remove()
		});

		var prCountAnimation = Raphael.animation({
			x: 50,
			'fill-opacity': 1
		}, 900, function() {
			countValue = this;
		});

		var animParamP = {
			x: 50
		};

		countValue.animate(countAnimation);
		prCount.animateWith(countValue, animParamP, prCountAnimation);
	}

	function updateSuccess(text) {
		successValue.attr({
			text: text
		});

	}

	function updateFail(text) {
		failValue.attr({
			text: text
		});

	}

});