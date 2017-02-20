var model={

	instruction1: 'Step:1 Click on the beaker to take into experiment table.',
	instruction2:'Step:2 Add required quantity of agar-agar powder to the beaker for the preparation of a 1.0%'
	+ 'agar-agar aqueous solution. [Click on the agar container’s spoon to transfer',
	instruction3:'Step:3 Add required volume of (1x TBE (Tris-Borate-EDTA), pH 8.6) buffer solution'
	+'[by clicking on the buffer container].',
	instruction4:'Step:4 Click on the watch glass to cover the top of the beaker with a wrap loosely'+
	'to prevent the solution from boiling over.',
	instruction5:'Step:5 Place the beaker in the microwave oven [by clicking on the beaker]. In real operation,'+ 
	'one should adjust time and power settings according to the oven output strength.'+
	'Alternatively, the solution can be heated on a hot plate or over a Bunsen burner.',
	instruction6:'Step:6 Remove the beaker at regular intervals from the microwave oven, swirl it gently,'+
	'heat again by placing it back in the oven until the agar melts completely.',
	instruction7:'Step:7 Remove the wrap. Pour about half of the hot solution in the mould[by clicking on the beaker].',
	instruction8:'Step:8 Place an appropriate thermometer in the in the beaker containing half of the hot solution.'
	+'[by clicking on the thermometer]',
	instruction9:'Step:9 Remove the wrap. Pour about half of the hot solution in the mould [by clicking on the beaker].'+
	'In order to avoid bubble formation and warping of casting tray, one should cool the solution to ~60°C'+ 
	'(until the beaker is just comfortable to touch) and pour it carefully into the gel mould.',
	instruction10:'Step:10 Place an appropriate thermometer in the in the beaker containing half of the hot solution.',
	instruction11:'Step:11 Click on the thermometer to place into the beaker.',
	instruction12:'Step:12 Place the beaker containing gel in a water bath at 70°C for 1 h.[by clicking on the beaker].',
	instruction13:'Step:13 Increase the temperature of the water bath to 90°C, and observe the gel melting temperature'+
	'when the gel in the beaker is liquefied forming a clear solution. The melting temperature is marked down as the'+ 
	'midpoint between the last time (temperature) when there was no flow and first time when there is flow of the agar sample'+
	'on tumbling the beaker. If one observes the sample carefully, one may recognise the gel melting temperature visually too.',

	images: ['images/spoon2.png', 'images/beaker_with_sol.png', 'images/half_filled_buffer2.png', 
	'images/openbuffer_bottle.png', 'images/open_microwave.png', 'images/beaker_with_sol_1.png',
	'images/thermometer1.png', 'images/thermometer2.png', 'images/thermometer.png', 'images/beaker_with_half_filled_sol.png',
	'images/gel_mold_solution.png', 'images/measurement_meter2.png', 'images/thermometer3.png', 'images/temp_reading1.png',
	'images/temp_reading3.png', 'images/measurement_meter4.png', 'images/measurement_meter5.png',
	'images/temp_reading4.png', 'images/temp_reading5.png'],

	spoonimages: ['images/spoon3.png', 'images/spoon4.png', 'images/spoon5.png', 'images/spoon1.png']

}

var view ={
	
	// Click counts on elements. Initial click will be considered as zero and then so on the
	// click count is incremented to perform the instructions as per the count of the click.
	beakercount: 0,
	watchglass_count: 0,
	thermometer_count: 0,

	// hideElements: Calls this method to make an element hidden. 
	hideElements: function(id){
		document.getElementById(id).style.visibility = 'hidden';
	},

	// showElements: Calls this method to make an element visible.
	showElements: function(id){
		document.getElementById(id).style.visibility = 'visible';
	},

	// setInnerHtml: Calls this method to set the innerText to an element.
	setInnerHTML: function (id, innerHTML) {
		document.getElementById(id).innerHTML = innerHTML;
	},

	// addClickEvent: Calls this method to add EventListener to an element.
	addClickEvent: function(id, method){
		var element = document.getElementById(id);
		element.addEventListener('click', method);
	},

	//removeClickEvent: Calls this method to remove EventListener for an element.
	removeClickEvent: function(id){
	    document.getElementById(id).style.pointerEvents = 'none';
	},

	//enableClickEvent: Calls this method to enable EventListener for an element.
  	enableClickEvent: function(id){
    	document.getElementById(id).style.pointerEvents = 'auto';
  	},

	// replaceElements: Calls this method to replace the element with an other element.
	replaceElements: function(id, image) {
		var element = document.getElementById(id);
		element.src = image;
	},

	// animateDirection_1: Calls this method to move an element in a straight line.
	animateDirection_1: function(id,top,left){
		$('#'+id).animate({
			top: top+'%', 
			left: left+'%'
		}, {
			duration: 1500
		});
	},

	// animateDirection_2: Calls this method to move the element to the top first and then to the left.
	animateDirection_2: function(id,top,left){
		$('#'+id).animate({
			top: top+'%'
		}, {
			duration: 1000
		})
				.animate({
			left: left+'%'
		}, {
			duration: 1000
		});
	},

	// animateDirection_3: Calls this method to move the element in a straight line along with the width 
	// and height of the element increasing/decreasing. 
	animateDirection_3: function(id, top, left, width, height){
		$('#'+id).animate({
			top: top+'%',
			left: left+'%',
			width: width+'%',
			height: height+'%'
		}, {
			duration: 1500
		});
	},

	// animateHeight: Calls this method to increase the height of an element.
    animateHeight: function(id, height) {
       $("#"+id).animate({
           height: height+'%'
       }, {
          duration: 500,
          easing: "linear"
       }); 
    },

    // animatePadding: Calls this method to decrease the height of an element.
	animatePadding: function(id, paddingTop) {
	    $("#"+id).animate({
	      paddingTop: paddingTop+'%'
	    }, {
	      duration: 1000,
	      easing: "linear"
	    }); 
	},

	// shakeElements: Calls this method to shake an element.
	shakeElements: function(id) {
		 $( id).effect( "shake" );
	},

	// rotateElements: Calls this method to make an element rotate for a given deg.
  	rotateElements: function(id, deg) {
	    // Code for Safari
	    document.getElementById(id).style.WebkitTransform = 'rotate('+deg+'deg)'; 
	    // Code for IE9
	    document.getElementById(id).style.msTransform = 'rotate('+deg+'deg)'; 
	    // Standard syntax
	    document.getElementById(id).style.transform = 'rotate('+deg+'deg)'; 
  	},

  	// changeImages: Calls this method to change image of an element for every few seconds.
	changeImages: function(id) {
	    var i = 0,
	    image = document.getElementById(id);
	    setInterval( function () { 
		    if (i >= model.spoonimages.length) {
		        return;
		    }
	        image.src = model.spoonimages[i];
	        i++;
	    }, 200);
	},

	// activateEvents: Calls this method to add EventListener to an elements at once. When an element is 
	// clicked corresponding function gets executed.
	activateEvents: function() {
		this.addClickEvent('reset_btn', function() { view.resetPage(); });
		this.addClickEvent('restart', function() { view.resetPage(); });
		this.addClickEvent('beaker', function() { view.moveBeaker(); });
		this.addClickEvent('agarose_sol', function() { view.movesolBottle(); });
		this.addClickEvent('spoon', function() { view.moveSpoon(); });
		this.addClickEvent('buffer_sol', function() { view.moveBuffer(); });
		this.addClickEvent('watch_glass', function() { view.moveWatchglass(); });
		this.addClickEvent('micro_wave', function() { view.openMicrowave(); });
		this.addClickEvent('thermometer', function() { view.moveThermometer(); });
		this.addClickEvent('gel_mold', function() { view.moveGelmold(); });
	},

	// initialInstructions: Calls this method to execute the following methods, when the page loads.
	// This method displays the first instruction to be performed and initially disables the
	// click events for all the elements except for the beaker as, the click events should be 
	// performed in an order.
	initialInstructions: function(){
		this.setInnerHTML('instruction', model.instruction1);
		this.removeClickEvent('agarose_sol');
		this.removeClickEvent('spoon');
		this.removeClickEvent('gel_mold');
		this.removeClickEvent('watch_glass');
		this.removeClickEvent('buffer_sol');
		this.removeClickEvent('thermometer');
		this.removeClickEvent('micro_wave');
	},

	// fadeElements: Calls this method to make an element fade in and fade out for every few seconds. 
	fadeElements: function(id){
		$('#'+id).fadeIn().fadeOut();
	},
	
	// resetPage: Calls this method to reset the page on clicking the button.
	resetPage: function(){
		location.reload();
	},

	// moveBeaker: 
	/* For the click zero calls this method to move the beaker on to the table for the first click.
	When this method is called for any click, click event for the beaker is disabled and then
	click for the next element is enabled.*/

	/* For the first click, click event is disabled for the beaker and moves the beaker into the microwave.
	Here the beaker, grey_solution, watch_glass are animated to move them inside the microwave. Here 
	the microwave gets replaced with open_microwave image and the open window of the microwave is made
	visible. Then the open micro wave window is made hidden and the close micro wave window is made visible.
	Now the click event is enabled for the microwave. */

	/* For the second click, click event is disabled for the beaker first. Then the beaker gets rotated and the
	image of the beaker and the gel mold gets replaced. Now, click event for the thermometer is enabled. */

	/* For the third click, click event is disabled for the beaker first. On click hand cursor gets hidden
	and the beaker, hand moves up and gets rotated. Then after few seconds they are moved down and the 
	hand image gets hidden .Now, click event for the thermometer is enabled. */

	/* For the other clicks, click event is disabled for the beaker first. Then the beaker is placed in
	water bath for every few seconds. */

	moveBeaker: function(){
		if(this.beakercount == 0){
			this.removeClickEvent('beaker');
			this.animateDirection_1('beaker','+=60', '+=8');
			this.enableClickEvent('agarose_sol');
			this.setInnerHTML('instruction', model.instruction2);
			this.beakercount++;
		}

		else if(this.beakercount == 1){
			if(!$('#watch_glass').is(':animated')){
				this.removeClickEvent('beaker');
				this.animateDirection_3('beaker', '+=2', '+=30', '-=0.8', '-=2');
				this.animateDirection_3('grey_solution', '+=2', '+=30', '-=0.7', '-=2');
				this.animateDirection_3('watch_glass', '+=2', '+=30', '-=0.8', '-=0');
				this.replaceElements('micro_wave', 'images/open_microwave.png');
				this.showElements('mw_openwindow');

				setTimeout(function() {
					view.hideElements('mw_openwindow');
					view.showElements('mw_closewindow');
					view.enableClickEvent('micro_wave');
					view.setInnerHTML('instruction', model.instruction6);
				},2000);
				this.beakercount++;
			}
		}

		else if(this.beakercount == 2) {
			if(!$('#gel_mold').is(':animated')){
				this.removeClickEvent('beaker');
				this.rotateElements('beaker', '-80');
				
				setTimeout(function() {
					view.replaceElements('beaker', model.images[9]);
					view.replaceElements('gel_mold', model.images[10]);
					view.rotateElements('beaker', '0');
					view.enableClickEvent('thermometer');
					view.setInnerHTML('instruction', model.instruction10);
				}, 1000);
				this.beakercount++;
			}
		}

		else if(this.beakercount == 3) {
			if(!$('#thermometer').is(':animated')){
				this.removeClickEvent('beaker');
				this.hideElements('hand_cursor1');
				this.showElements('hand');
				this.animateDirection_1('hand', '-=16', '+=0');
				this.animateDirection_1('beaker', '-=16', '+=0');

				setTimeout(function() {
					view.rotateElements('beaker', '20');
					view.rotateElements('hand', '16');
				}, 1000);

				setTimeout(function() {
					view.rotateElements('beaker', '-20');
					view.rotateElements('hand', '-16');
				}, 2000);

				setTimeout(function() {
					view.rotateElements('beaker', '0');
					view.rotateElements('hand', '0');
				}, 3000);

				setTimeout(function() {
					view.animateDirection_1('hand', '+=16', '+=0');
					view.animateDirection_1('beaker', '+=16', '+=0');
					view.hideElements('hand');
					view.enableClickEvent('thermometer');
					view.setInnerHTML('instruction', model.instruction11);
				}, 4000);
				this.beakercount++;
			}
		}

		else if(this.beakercount == 4) {
			this.removeClickEvent('beaker');
			this.animateDirection_1('beaker', '-=24', '+=30');
			this.animateDirection_1('thermometer', '-=24', '+=30');
			setTimeout(function() {
				view.animateDirection_1('beaker', '+=25', '+=0');
				view.animateDirection_1('thermometer', '+=25', '+=0');
			}, 2000);

			setTimeout(function() {
				view.showElements('clock');
				view.showElements('clockhand');
				view.rotateElements('clockhand', '360')
			}, 4000);

			setTimeout(function() {
				view.showElements('measurement_meter3');
				view.showElements('meter_scale_3');
				view.animateHeight('meter_scale_3', '26');
				// setInterval(function(){
				// 		value= document.getElementById('microwave_readings').innerHTML;
				// 		value++;
				// 		alert(value);
				// 		// if(value == 85){
				// 		// 	clearInterval();
				// 		// }
				// }, 10);
			}, 6000);

			setTimeout(function() {
				view.hideElements('clock');
				view.hideElements('clockhand');
				view.replaceElements('measurement_meter3', model.images[14]);
				view.showElements('blue_arrow');
				setInterval(function(){
					view.fadeElements('blue_arrow');
				}, 50);
			}, 9000);

			setTimeout(function() {
				view.hideElements('blue_arrow');
				view.hideElements('measurement_meter3');
				view.hideElements('meter_scale_3');
				view.animateDirection_1('beaker', '-=25', '+=0');
				view.animateDirection_1('thermometer', '-=25', '+=0');
			}, 11000);

			setTimeout(function() {
				view.animateDirection_1('beaker', '+=24', '-=30');
				view.animateDirection_1('thermometer', '+=24', '-=30');
			}, 13000);

			setTimeout(function() {
				view.showElements('hand');
				view.animateDirection_1('hand', '-=16', '+=0');
				view.animateDirection_1('beaker', '-=16', '+=0');
				view.animateDirection_1('thermometer', '-=16', '+=0');
			}, 15000);

			setTimeout(function() {
				view.rotateElements('beaker', '25');
				view.rotateElements('thermometer', '25');
				view.rotateElements('hand', '25');
			}, 16000);

			setTimeout(function() {
				view.rotateElements('beaker', '0');
				view.rotateElements('thermometer', '10');
				view.rotateElements('hand', '0');
			}, 17000);

			setTimeout(function() {
				view.animateDirection_1('hand', '+=16', '+=0');
				view.animateDirection_1('beaker', '+=16', '+=0');
				view.animateDirection_1('thermometer', '+=16', '+=0');
			}, 19000);

			setTimeout(function() {
				view.hideElements('hand');
				view.enableClickEvent('beaker');
				view.setInnerHTML('instruction', model.instruction13);
			}, 20000);
			this.beakercount++;
		}

		else if(this.beakercount == 5){
			this.removeClickEvent('beaker');
			this.animateDirection_1('beaker', '-=24', '+=30');
			this.animateDirection_1('thermometer', '-=24', '+=30');
			setTimeout(function() {
				view.animateDirection_1('beaker', '+=25', '+=0');
				view.animateDirection_1('thermometer', '+=25', '+=0');
			}, 2000);

			setTimeout(function() {
				view.showElements('measurement_meter3');
				view.replaceElements('measurement_meter3', model.images[15]);
				view.showElements('meter_scale_4');
				view.animateHeight('meter_scale_4', 20.5);
			}, 4000);

			setTimeout(function() {
				view.replaceElements('measurement_meter3', model.images[17]);
				view.showElements('blue_arrow_1');
				setInterval(function(){
					view.fadeElements('blue_arrow_1');
				}, 50);
			}, 5000);

			setTimeout(function() {
				view.hideElements('blue_arrow_1');
				view.hideElements('measurement_meter3');
				view.hideElements('meter_scale_4');
				view.animateDirection_1('beaker', '-=25', '+=0');
				view.animateDirection_1('thermometer', '-=25', '+=0');
			}, 7000);

			setTimeout(function() {
				view.animateDirection_1('beaker', '+=24', '-=30');
				view.animateDirection_1('thermometer', '+=24', '-=30');
			}, 9000);

			setTimeout(function() {
				view.showElements('hand');
				view.animateDirection_1('hand', '-=16', '+=0');
				view.animateDirection_1('beaker', '-=16', '+=0');
				view.animateDirection_1('thermometer', '-=16', '+=0');
			}, 12000);

			setTimeout(function() {
				view.rotateElements('beaker', '25');
				view.rotateElements('thermometer', '25');
				view.rotateElements('hand', '25');
			}, 14000);

			setTimeout(function() {
				view.rotateElements('beaker', '0');
				view.rotateElements('thermometer', '10');
				view.rotateElements('hand', '0');
			}, 16000);

			setTimeout(function() {
				view.animateDirection_1('hand', '+=16', '+=0');
				view.animateDirection_1('beaker', '+=16', '+=0');
				view.animateDirection_1('thermometer', '+=16', '+=0');
			}, 18000);

			setTimeout(function() {
				view.hideElements('hand');
				view.enableClickEvent('beaker');
			}, 20000);
			this.beakercount++;
		}

		else if(this.beakercount == 6){
			this.removeClickEvent('beaker');
			this.animateDirection_1('beaker', '-=24', '+=30');
			this.animateDirection_1('thermometer', '-=24', '+=30');
			setTimeout(function() {
				view.animateDirection_1('beaker', '+=25', '+=0');
				view.animateDirection_1('thermometer', '+=25', '+=0');
			}, 2000);

			setTimeout(function() {
				view.showElements('measurement_meter3');
				view.replaceElements('measurement_meter3', model.images[16]);
				view.showElements('meter_scale_5');
				view.animateHeight('meter_scale_5', 24.2);
			}, 4000);

			setTimeout(function() {
				view.replaceElements('measurement_meter3', model.images[18]);
				view.showElements('blue_arrow_1');
				setInterval(function(){
					view.fadeElements('blue_arrow_1');
				}, 50);
			}, 5000);

			setTimeout(function() {
				view.hideElements('blue_arrow_1');
				view.hideElements('measurement_meter3');
				view.hideElements('meter_scale_5');
				view.animateDirection_1('beaker', '-=25', '+=0');
				view.animateDirection_1('thermometer', '-=25', '+=0');
			}, 7000);

			setTimeout(function() {
				view.animateDirection_1('beaker', '+=24', '-=30');
				view.animateDirection_1('thermometer', '+=24', '-=30');
			}, 9000);

			setTimeout(function() {
				view.showElements('dotted_line');
				view.showElements('final_instruction');
			}, 10000);

			setTimeout(function() {
				view.showElements('hand');
				view.animateDirection_1('hand', '-=12', '+=0');
				view.animateDirection_1('beaker', '-=8', '+=0');
				view.animateDirection_1('thermometer', '-=8', '+=0');
				view.animateDirection_1('dotted_line', '-=6.5', '+=0');
			}, 12000);

			setTimeout(function() {
				view.rotateElements('beaker', '25');
				view.rotateElements('thermometer', '25');
				view.rotateElements('hand', '25');
			}, 14000);

			setTimeout(function() {
				view.showElements('instruction_box2');
				view.showElements('restart');
			}, 16000);

		}

	},

	// Moves bottle: When this method is called, click is made disabled for the solution bottle 
	// and then it is moved on to the table. Then the solution bottle is made hidden and the 
	// open solution bottle and cap is made visible and the cap move downs. Then the spoon to 
	// collect the solution is made visible and it is moved down into the bottle. Then an instruction 
	// box and hand hand cursor are made visible showing to collect the solution from the bottle. Now the 
	// click for the spoon element is enabled.
	movesolBottle: function(){
		if(!$('#beaker').is(':animated')){
			this.removeClickEvent('agarose_sol');
			this.animateDirection_1('agarose_sol', '+=60', '+=6');

			setTimeout(function(){
				view.hideElements('agarose_sol');
				view.showElements('agaroseSol_cap');
				view.showElements('open_agaroseSol_bottle');
				view.animateDirection_1('agaroseSol_cap', '+=12', '+=4');
			}, 2000);

			setTimeout(function(){
				view.showElements('spoon');
				view.animateDirection_1('spoon', '+=10', '+=0');
			}, 4000);

			setTimeout(function(){
				view.showElements('instruction_box1');
				view.showElements('hand_cursor');
				setInterval(function(){
					view.fadeElements('hand_cursor');
				}, 50);
				view.enableClickEvent('spoon');
				view.setInnerHTML('instruction', model.instruction3);
			}, 5500);
		}
	},

	
	// moveSpoon: Calls method to add agarose solution from the bottle into the beaker.
	// When this method is called, click is made disabled for the spoon and the hand cursor is 
	// made hidden. Here the spoon gets replaced with spoon with a solution and then it moves near the 
	// beaker by changing the spoon images. Then the beaker image gets replaced with a beaker with solution
	// image. Then the  spoon and the instruction box gets hidden. Then the caps moves up. Then the open 
	// solution bottle and the cap gets replaced by a agarose solution bottle and finally it moves back to 
	// the shelf. Now the click is enabled for the buffer sol bottle.

	moveSpoon: function(){
		this.removeClickEvent('spoon');	
		this.hideElements('hand_cursor');
		this.replaceElements('spoon', model.images[0]);
		this.animateDirection_2('spoon', '-=5' , '+=13');

		setTimeout(function(){
			view.changeImages('spoon');
			
		}, 2000);

		setTimeout(function(){
			view.replaceElements('beaker', model.images[1]);
			view.animateDirection_1('spoon', '+=0', '+=20');
			view.hideElements('instruction_box1');
		}, 3000);

		setTimeout(function(){
			view.hideElements('spoon');
			view.animateDirection_1('agaroseSol_cap', '-=12', '-=4');
		}, 4000);

		setTimeout(function(){
			view.hideElements('agaroseSol_cap');
			view.hideElements('open_agaroseSol_bottle');
			view.showElements('agarose_sol');
			view.animateDirection_1('agarose_sol', '-=60', '-=6');
			view.enableClickEvent('buffer_sol');
		}, 5000);
	},

	// moveBuffer: Calls method to add buffer solution into the beaker and then moves back onto the shelf.
	// When this method is called, click is made disabled for the buffer bottle and the buffer bottle moves 
	// on to the table. The the buffer bottle is made hidden and the open buffer bottle and its cap are made 
	// visible. The the buffer bottle moves up, rotates and pours the solution into the beaker and comes back 
	// to its initial position. Then the buffer cap moves up near the bottle. Then the open buffer bottle, its 
	// cap are made hidden and buffer solution bottle is made visible. Then finally buffer bottle moves back 
	// to the shelf. Now the click is enabled for watch glass.
	moveBuffer: function(){
	    if(!$('#agarose_sol').is(':animated')){
			this.removeClickEvent('buffer_sol');
			this.animateDirection_1('buffer_sol', '+=60', '-=35');

			setTimeout(function(){
				view.hideElements('buffer_sol');
				view.showElements('bufferbottle_cap');
				view.showElements('openbuffer_bottle');
				view.animateDirection_1('bufferbottle_cap', '+=12', '-=4');
			}, 2000);

			setTimeout(function(){
				view.animateDirection_1('openbuffer_bottle', '-=9', '+=5.5' );
			}, 4000);

			setTimeout(function(){
				view.rotateElements('openbuffer_bottle', '112');
			}, 6000);

			setTimeout(function() {
				view.replaceElements('openbuffer_bottle', model.images[2]);
				view.showElements('grey_solution');
				view.animateHeight('grey_solution', '7.1');
			}, 7000);

			setTimeout(function(){
				view.rotateElements('openbuffer_bottle', '0');
				view.replaceElements('openbuffer_bottle', model.images[3] );
				view.animateDirection_1('openbuffer_bottle', '+=10', '-=5');
			}, 8000);

			setTimeout(function(){
				view.animateDirection_1('bufferbottle_cap', '-=12', '+=4');
			}, 9000);

			setTimeout(function(){
				view.hideElements('bufferbottle_cap');
				view.hideElements('openbuffer_bottle');
				view.showElements('buffer_sol');
				view.animateDirection_1('buffer_sol', '-=60', '+=35');
				view.enableClickEvent('watch_glass');
			    view.setInnerHTML('instruction', model.instruction4);
			}, 10000);
		}
	},

	/* moveWatchglass: 
	Calls this method to cover the top of the beaker for the first click.when this method is called, 
	click is made disabled for the watch glass and click is enabled for the beaker. Here the watch_glass 
	is moved down to cover the top of the beaker. */

	/* For the second click, click event for the watch_glass is disabled first. Then the beaker and watch_glass
	moves inside the microwave oven. Then after few seconds they are taken out of the microwave and the 
	watch_glass is moved back to the shelf. Now the click event for the thermometer is enabled. */
 	moveWatchglass: function() {
		if(this.watchglass_count == 0){
			if(!$('#buffer_sol').is(':animated')){
				this.removeClickEvent('watch_glass');
				this.rotateElements('watch_glass', '5.7');
				this.animateHeight('watch_glass', '2.5');
				this.animateDirection_1('watch_glass', '+=56', '-=13.2');
				this.enableClickEvent('beaker');
				this.setInnerHTML('instruction', model.instruction5);
				this.watchglass_count++;
			}
		}
		
		else if(this.watchglass_count == 1) {
			this.removeClickEvent('watch_glass');
			this.animateDirection_3('beaker', '+=2', '+=30', '-=1', '-=3');
			this.animateDirection_3('watch_glass',  '+=2', '+=30', '-=0.8', '+=0');

			setTimeout(function() {
				view.replaceElements('micro_wave', model.images[4]);
				view.hideElements('mw_openwindow');
				view.showElements('mw_closewindow');
			}, 2000);

			setTimeout(function() {
				view.hideElements('mw_closewindow');
				view.showElements('mw_openwindow');
			   	view.animateDirection_3('beaker', '-=2', '-=30', '+=1', '+=3');
				view.animateDirection_3('watch_glass',  '-=2', '-=30', '+=0.8', '+=0');
			}, 4000);
			
			setTimeout(function() {
				view.animateDirection_1('watch_glass', '-=55', '+=14');
				view.rotateElements('watch_glass', '0');
				view.animateHeight('watch_glass', '4.5');
				view.enableClickEvent('thermometer');
				view.setInnerHTML('instruction', model.instruction8);
			}, 5000);

			this.watchglass_count++;
		}
	},

	// open microwave: Calls this method to move the beaker on to the table from the microwave.
	// Here the when the method is called click event for the microwave is disabled first.
	// Then the microwave close window is made hidden and microwave open window is made visible.
	// Then the beaker, grey_solution, watch_glass moves on to the table. Then the hand image is 
	// made visible to take the beaker up and swirl it. Then the hand, beaker, grey_solution,
	// watch_glass moves up and the beaker gets shaked and then the beaker image gets replaced.
	// Then all the elements moves down to its initial position. Now the click for the watch_glass 
	// is enabled.

	openMicrowave: function() {
		if(!$('#beaker').is(':animated')){
			this.removeClickEvent('micro_wave');

			setTimeout(function() {
				view.hideElements('mw_closewindow');
				view.showElements('mw_openwindow');
				view.replaceElements('micro_wave',  model.images[4]);
				view.animateDirection_3('beaker', '-=2', '-=30', '+=0.8', '+=2');
				view.animateDirection_3('grey_solution', '-=2', '-=30', '+=0.7', '+=2');
				view.animateDirection_3('watch_glass', '-=2', '-=30', '+=0.8', '+=0');
			}, 1000);
			

			setTimeout(function() {
				view.showElements('hand');
				view.animateDirection_1('hand', '+=18', '+=10');
			}, 2000);

			setTimeout(function() {
				view.animateDirection_1('hand', '-=16', '+=0');
				view.animateDirection_1('beaker', '-=16', '+=0');
				view.animateDirection_1('grey_solution', '-=16', '+=0');
				view.animateDirection_1('watch_glass', '-=16', '+=0');
			}, 4000);

			setTimeout(function() {
				view.showElements('circle');
				view.shakeElements('#beaker');
				view.shakeElements('#hand');
			}, 6000);

			setTimeout(function() {	
				view.hideElements('grey_solution');
				view.replaceElements('beaker',  model.images[5]);
				view.hideElements('circle');
				view.animateDirection_1('hand', '+=16', '+=0');
				view.animateDirection_1('beaker', '+=16', '+=0');
				view.animateDirection_1('watch_glass', '+=16', '+=0');
			}, 6500);

			setTimeout(function(){
				view.hideElements('hand');
				view.enableClickEvent('watch_glass');
				view.setInnerHTML('instruction', model.instruction7);
			}, 7500);
		}
	},

	//moveThermometer:
	/* For the first click, calls this method to move the thermometer into the beaker.When the method is called,
	click for the thermometer is disabled first. Here the once the thermometer moves down, a measurement meter
	is made visible and the thermometer gets replaced and moves back to the shelf. Now the click event for the
	gel mold is enabled. */

	/* For the second click, calls this method to move the thermometer into the beaker.When the method is called,
	click for the thermometer is disabled first. Here the once the thermometer moves down, a measurement meter
	is made visible and the thermometer gets replaced and moves back to the shelf. Now the click event for the
	beaker is enabled. */ 

	/* For the third click, calls this method to move the thermometer into the beaker. When the method is called,
	click for the thermometer is disabled first. Here the once the thermometer moves down, thermometer gets 
	replaced. Then the micro wave is made hidden and the water bath is made visible.Now the click event for 
	the beaker is enabled. */
	moveThermometer: function() {
		if(this.thermometer_count == 0){
			if(!$('#watch_glass').is(':animated')){
				this.removeClickEvent('thermometer');
				this.animateDirection_1('thermometer', '+=56', '-=35.2');

				setTimeout(function() {
					view.replaceElements('thermometer', model.images[6]);
				}, 1000);

				setTimeout(function() {
					view.showElements('measurement_meter1');
					view.showElements('meter_scale_1');
					view.animatePadding('meter_scale_1', '+=7');
				}, 2000);

				setTimeout(function() {
					view.replaceElements('thermometer', model.images[7]);
					view.showElements('temp60');
					view.replaceElements('measurement_meter1', model.images[13]);
				}, 3000);

				setTimeout(function() {
					view.hideElements('measurement_meter1');
					view.hideElements('meter_scale_1');
					view.hideElements('temp60');
					view.replaceElements('thermometer', model.images[8]);
					view.animateDirection_1('thermometer', '-=56', '+=35.2');
					view.enableClickEvent('gel_mold');
					view.setInnerHTML('instruction', model.instruction9);
				}, 4000);
				this.thermometer_count++;
			}
		}
			
		else if(this.thermometer_count == 1) {
			if(!$('#beaker').is(':animated')){
				this.removeClickEvent('thermometer');
				this.animateDirection_1('thermometer', '+=58', '-=35.2');
				this.hideElements('micro_wave');
				this.hideElements('mw_openwindow');
		
				setTimeout(function() {
					view.showElements('measurement_meter1');
					view.replaceElements('measurement_meter1', model.images[11]);
					view.showElements('meter_scale_2');
					view.animatePadding('meter_scale_2', '+=6.5');
				}, 2000);

				setTimeout(function() {
					view.replaceElements('thermometer', model.images[6]);
				}, 3000);

				setTimeout(function() {
					view.replaceElements('thermometer', model.images[12]);
					view.showElements('temp_reading2');
				}, 4000);

				setTimeout(function() {
					view.replaceElements('thermometer', model.images[6]);
					view.animateDirection_1('thermometer', '-=58', '+=35.2');
				}, 6000);

				setTimeout(function() {
					view.hideElements('temp_reading2');
					view.hideElements('measurement_meter1');
					view.hideElements('meter_scale_2');
				}, 7000);

				setTimeout(function() {
					view.showElements('hand_cursor1');
					view.enableClickEvent('beaker');
					setInterval(function(){
						view.fadeElements('hand_cursor1');
					}, 50);
				}, 8000);
				this.thermometer_count++;
			}
		}

		else if(this.thermometer_count == 2) {
			if(!$('#beaker').is(':animated')){
				this.removeClickEvent('thermometer');
				this.animateDirection_1('thermometer', '+=58', '-=35.2');
				//this.replaceElements('thermometer', 'images/thermometer1.png');
				setTimeout(function() {
					view.replaceElements('thermometer', model.images[12]);
					view.showElements('water_bath');
					view.showElements('microwave_readings');
					view.enableClickEvent('beaker');
					view.setInnerHTML('instruction', model.instruction12);
				}, 2000);
				this.thermometer_count++;
			}
		}
	},

	/* moveGelmold: Calls this method to move the gelmold on to the table. Here the click event for the
	gel mold is disabled and click event for the beaker is enabled. */
	moveGelmold: function() {
		if(!$('#thermometer').is(':animated')){
			this.removeClickEvent('gel_mold');
			this.animateDirection_1('gel_mold','+=65', '-=8.8');
			this.enableClickEvent('beaker');
		}
	},

	// init: calls methods to set instructions and activate events.
	init:function(){
		this.activateEvents();
		this.initialInstructions();
	}
}

// onload function: call init method on window onload.
window.onload=function() {
	view.init();
}
