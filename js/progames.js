$(function()
{
	
	
	 var paper = Raphael('paper', 500, 500);
	//var circle = paper.circle(100,100, 50);

	for(var i = 1; i < 5; i++)
	 {
	// 	var multiplier = i*5;
	// 	paper.circle(250 + (2*multiplier), 100 + multiplier, 50 - multiplier);

		 paper.rect(10 + 75 * i, 20, 70, 40, 10)
         .attr({gradient: '290-#526c7a-#fff', stroke: '#3b4449'})
         .data("i", i)
         .click(function () {
         	this.unclick();
            this.animate({y: 490}, 8000, function() 
            { 
              this.remove();  
            });  
         });

	}



	// var rect = paper.rect(100, 200, 100, 50);
	// var ellipse = paper.ellipse(350, 250, 100, 50);
	// var tetronimo = paper.path("M 150 420 l 0 -50 l 50 0 l 0 50 l 50 0 l 0 50 l -150 0 l 0 -50 z");

	// tetronimo.attr({
	// 	    gradient: '90-#526c7a-#64a0c1',
	// 	    stroke: '#3b4449',  
 //            'stroke-width': 10,  
 //            'stroke-linejoin': 'round'  
             
	// })

	// tetronimo.animate({"transform": "r 360"}, 2000, 'bounce', function()
	// {
	// 	this.animate(
	// 	{
	// 		"transform": "r 0",
	// 		'stroke-width': 1,
	// 		gradient: '45-#526c7a-#64a0c1',
	// 	}, 2000, 'bounce');
	// });



});