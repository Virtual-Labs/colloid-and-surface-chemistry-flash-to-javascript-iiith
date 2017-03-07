var model={

	instruction1: 'Select the beaker from the apparatus to begin the experiment.',
	instruction2:'Beaker half-filled with soft water.Select talcum powder from the apparatus.',
	instruction3:'Select detergent from the apparatus.',
	instruction4:'The powder particles seperate and settle down.',
	instruction5: 'Click on the reset button.',
	instruction6:'Click on the beaker to begin the next experiment.',
	instruction7:'Beaker filled with soft water. Click on the Needle.',
	instruction8:'Carefully place the Needle on the surface of the water.Note that the Needle floats despite having more density than water.Select the detergent.',
	instruction9:'Needle starts sinking.',
	instruction10:'Click on Reset.',
	instruction11:'Select the beaker to experiment with hard-water.',
	instruction12:'Beaker half-filled with hard water.Select talcum powder from the apparatus.',
	instruction13:'Select detergent from the apparatus.',
	instruction14:'There is no effect till few more drops are added.',
	instruction15:'The powder particles seperate and settle down.Click on the reset button.',

	images: ['images/micro_analysis_1.gif', 'images/beaker2.png', 'images/beaker3.png', 
	'images/micro_analysis_2.gif'],

	dropimages: ['images/drop1.png', 'images/drop2.png'],

	particles_1: ['images/powder_1.png', 'images/powder_2.png', 'images/powder_3.png', 'images/powder_4.png',
	'images/powder_5.png', 'images/powder_6.png', 'images/powder_7.png', 'images/powder_8.png', 
	'images/powder_9.png', 'images/powder_10.png'],

	particles_2: ['images/particle_1.png', 'images/particle_2.png', 'images/particle_3.png', 'images/particle_4.png',
	'images/particle_5.png','images/particle_6.png','images/particle_7.png','images/particle_8.png',
	'images/particle_9.png', 'images/particle_10.png', 'images/particle_11.png', 'images/particle_12.png',
	'images/particle_13.png'],

	htmlpages: ['htmlpages/frames.html']

}

var view ={
	/* Click counts on elements. Initial click will be considered as zero and then so on the
	click count is incremented to execute the instructions as per the count of the click. */
	beaker_clkcount:0,
	detergent_clkcount:0,
	reset_clkcount:0,
	microscopic_clkcount:0,

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

	// changeImages: Calls this method to change image of an element for every few seconds.
	changeImages: function(id, images_array) {
	    var i = 0,
	    image = document.getElementById(id);
	    setInterval( function () { 
		    if (i >= images_array.length) {
		        return;
		    }
	        image.src = images_array[i];
	        i++;
	    }, 50);
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

	// shakeElements: Calls this method to shake an element.
	shakeElements: function(id) {
		 $(id).effect( "shake" );
	},

	// loadPage: Calls this method to load html page in a div
  	loadPage: function (id, htmlpage) {
    	document.getElementById(id).innerHTML='<object type="text/html" data='+htmlpage+' ></object>';
  	},

  	// activateEvents: Calls this method to add EventListener to an elements at once. When an element is 
	// clicked corresponding function gets executed.
	activateEvents: function() {
		this.addClickEvent('reset_btn', function() { view.resetPage(); });
		this.addClickEvent('beaker_btn', function() { view.showBeaker(); });
		this.addClickEvent('talcum_btn', function() { view.showTalcum(); });
		this.addClickEvent('detergent_btn', function() { view.showDetergent(); });
		this.addClickEvent('microscopic_analysis_link', function() { view.microscopicView(); });
		this.addClickEvent('reset', function() { view.resetExperiment(); });
		this.addClickEvent('needle_btn', function() { view.moveNeedle(); });
	},

	// initialInstructions: Calls this method to execute the following methods, when the page loads.
	initialInstructions: function(){
		this.setInnerHTML('instruction', model.instruction1);
		this.removeClickEvent('talcum_btn');
		this.removeClickEvent('needle_btn');
		this.removeClickEvent('detergent_btn');
	},
	
	// resetPage: Calls this method to reset the page on clicking the button.
	resetPage: function(){
		location.reload();
	},
 
	// transitionElements: calls this method to scale the elements width/height or rotate the elements
	// with a smoother transition.
	transitionElements: function(id, property){
		document.getElementById(id).style.WebkitTransform = property;
	 	// Code for IE9
	 	document.getElementById(id).style.msTransform = property;
	 	// Standard syntax
	 	document.getElementById(id).style.transform = property;
	},
	
	// showBeaker: 
	  /*For the click count Zero this method is called to make the beaker visible with a scaling transition.
	  When this method is called click event for the beaker button is disabled and click event for talcum_powder 
	  button is enabled, followed with an instruction to perform the experiment. */

	  /*For the click count one this method is called to make the beaker visible with a scaling transition.
	  When this method is called click event for the beaker button is disabled and click event for needle 
	  button is enabled, followed with an instruction to perform the experiment. */

	  /*For the click count two this method is called to make the beaker visible.
	  When this method is called click event for the beaker button is disabled and click event for talcum_powder
	  button is enabled, followed with an instruction to perform the experiment.*/

	showBeaker: function(){
		if(this.beaker_clkcount == 0){
			this.removeClickEvent('beaker_btn');
			this.showElements('beaker');
			this.transitionElements('beaker', 'scale(1.3, 1.3)');
			this.enableClickEvent('talcum_btn');
			this.setInnerHTML('instruction', model.instruction2);
			this.beaker_clkcount++;
		}

		else if(this.beaker_clkcount == 1){
			this.removeClickEvent('beaker_btn');
			this.showElements('beaker');
			this.replaceElements('beaker', model.images[1]);
			this.transitionElements('beaker', 'scale(1.5, 1.5)');
			this.enableClickEvent('needle_btn');
			this.setInnerHTML('instruction', model.instruction7);
			this.beaker_clkcount++;
		}

		else if(this.beaker_clkcount == 2){
			this.removeClickEvent('beaker_btn');
			this.showElements('beaker');
			this.replaceElements('beaker', model.images[2]);
			this.enableClickEvent('talcum_btn');
			this.setInnerHTML('instruction', model.instruction12);
			this.beaker_clkcount++;
		}
	},


	/* showTalcum: Calls this method to add powder particles into the beaker.When this method is called,
	talcum_powder is made visible by scaling the image and click event for the talcum powder button is 
	disabled. Then a powder particles are shown by changing the images. Then talcum powder moves down. 
	Then a click event is enabled for detergent button followed with an instruction. */
	showTalcum: function(){
		this.removeClickEvent('talcum_btn');
		this.showElements('talcum_powder');
		this.transitionElements('talcum_powder', 'scale(2.5, 2.5) translate(77px, -79px) rotate(90deg)');

		setTimeout(function(){
			// view.shakeElements('#talcum_powder');
			view.showElements('powder_particles_1');
			view.changeImages('powder_particles_1', model.particles_1);
		}, 2000);

		setTimeout(function(){
			view.transitionElements('talcum_powder', 'scale(1, 1) translate(-84px, -104px) rotate(1deg)');
			view.enableClickEvent('detergent_btn');
			view.setInnerHTML('instruction', model.instruction3);
		}, 3000);
	},


	// showDetergent: Calls this method to add detergent into the beaker. 
	/*For the click count zero, initially click event for the  detergent button is disabled and detergent image 
	is made visible. Then it moved up to add solution.Here the drop1 is made visible and then its moved down 
	to give a droping effect.Then the drop1 is made hidden and the powder particles are moved down. Then 
	detergent is moved back onto the table.Then a microscopic_analysis and reset link are made visible.*/

	/* For the click count one, initially click event for the detergent button is disabled and detergent image 
	is made visible. Then it moved up to add solution.Here the drop2 is made visible and then it is moved down 
	to give a droping effect.Then the drop2 is made hidden and the needle is moved down. Then 
	detergent is moved back onto the table.Then a reset link is made visible. */

	/* For the click count two, initially click event for the detergent button is disabled and detergent image 
	is made visible. Then it moved up to add solution.Here the drop images are made visible and then it is moved 
	down to give a droping effect untill the powder particle moves down.Then detergent is moved back onto the 
	table.Then a microscopic_analysis and reset link are made visible.*/

	showDetergent: function(){
		if(this.detergent_clkcount == 0){
			this.removeClickEvent('detergent_btn');
			this.showElements('detergent');
			this.transitionElements('detergent', 'scale(1.5, 1.5) translate(-88px, -127px)');

			setTimeout(function(){
				view.transitionElements('detergent', 'scale(1.5, 1.5) translate(-88px, -127px) rotate(-33deg)');
			}, 1000);

			setTimeout(function(){
				view.showElements('drop1');
				view.changeImages('drop1', model.dropimages);
				view.transitionElements('drop1', 'translate(-25px, 192px)');
				view.setInnerHTML('instruction', model.instruction4);
			}, 2000);

			setTimeout(function(){
				view.hideElements('drop1');
				view.hideElements('powder_particles_1');
				view.showElements('powder_particles_2');
				view.changeImages('powder_particles_2', model.particles_2);
			}, 3000);

			setTimeout(function(){
				view.animateDirection_1('powder_particles_2', '+=26', '+=0');
			}, 4000);

			setTimeout(function(){
				view.transitionElements('detergent', 'scale(1, 1) translate(62px, -100px) rotate(-1deg)');
			}, 5000);

			setTimeout(function(){
				view.showElements('microscopic_analysis_link');
				view.showElements('reset');
				view.setInnerHTML('instruction', model.instruction5);
			}, 6000);
			this.detergent_clkcount++;
		}

		else if(this.detergent_clkcount == 1){
			this.removeClickEvent('detergent_btn');
			this.showElements('detergent');
			this.transitionElements('detergent', 'scale(1.5, 1.5) translate(-61px, -127px)');
			setTimeout(function(){
				view.transitionElements('detergent', 'scale(1.5, 1.5) translate(-61px, -127px) rotate(-36deg)');
			}, 1000);

			setTimeout(function(){
				view.showElements('drop2');
				view.changeImages('drop2', model.dropimages);
				view.transitionElements('drop2', 'translate(-25px, 120px)');
			}, 2500);

			setTimeout(function(){
				view.hideElements('drop2');
			}, 3500);

			setTimeout(function(){
				view.transitionElements('needle', 'translate(331px, 230px)');
				view.setInnerHTML('instruction', model.instruction9);
			}, 4000);

			setTimeout(function(){
				view.transitionElements('detergent', 'scale(1, 1) translate(61px, -111px) rotate(-1deg)');
			}, 4500);

			setTimeout(function(){
				view.showElements('reset');
				view.setInnerHTML('instruction', model.instruction10);
			}, 6000);
			this.detergent_clkcount++;
		}

		else if(this.detergent_clkcount == 2){
			this.removeClickEvent('detergent_btn');
			this.showElements('detergent');
			this.transitionElements('detergent', 'scale(1.5, 1.5) translate(-89px, -134px)');
			setTimeout(function(){
				view.transitionElements('detergent', 'scale(1.5, 1.5) translate(-89px, -134px) rotate(-36deg)');
			}, 1000);

			setTimeout(function(){
				view.showElements('drop3');
				view.changeImages('drop3', model.dropimages);
				view.transitionElements('drop3', 'translate(-25px, 186px)');
			}, 2500);

			setTimeout(function(){
				view.hideElements('drop3');
				view.setInnerHTML('instruction', model.instruction14);
			}, 3500);

			setTimeout(function(){
				view.showElements('drop4');
				view.changeImages('drop4', model.dropimages);
				view.transitionElements('drop4', 'translate(-25px, 186px)');
			}, 4500);

			setTimeout(function(){
				view.hideElements('drop4');
			}, 5500);

			setTimeout(function(){
				view.showElements('drop5');
				view.changeImages('drop5', model.dropimages);
				view.transitionElements('drop5', 'translate(-25px, 186px)');
			}, 6500);

			setTimeout(function(){
				view.hideElements('drop5');
			}, 7500);

			setTimeout(function(){
				view.showElements('drop6');
				view.changeImages('drop6', model.dropimages);
				view.transitionElements('drop6', 'translate(-25px, 186px)');
			}, 8500);

			setTimeout(function(){
				view.hideElements('drop6');
				view.hideElements('powder_particles_1');
				view.showElements('powder_particles_3');
				view.changeImages('powder_particles_3', model.particles_2);
			}, 9500);

			setTimeout(function(){
				view.animateDirection_1('powder_particles_3', '+=26', '+=0');
			}, 10500);

			setTimeout(function(){
				view.transitionElements('detergent', 'scale(1, 1) translate(62px, -100px) rotate(-1deg)');
			}, 11500);

			setTimeout(function(){
				view.showElements('microscopic_analysis_link');
				view.showElements('reset');
				view.enableClickEvent('microscopic_analysis_link');
				view.setInnerHTML('instruction', model.instruction15);
			}, 12500);
			this.detergent_clkcount++;
		}
	},

	// resetExperiment: Calls this method to hide the elements on click to perform the next experiment.
	// Then it enables click event for the beaker button.
	resetExperiment:function(){
		if(this.reset_clkcount==0){
			this.hideElements('talcum_powder');
			this.hideElements('beaker');
			this.hideElements('detergent');
			this.hideElements('powder_particles_2');
			this.hideElements('microscopic_analysis_link');
			this.hideElements('reset');
			this.enableClickEvent('beaker_btn');
			this.setInnerHTML('instruction', model.instruction6);
			this.reset_clkcount++;
		}
		else if(this.reset_clkcount == 1){
			this.hideElements('needle');
			this.hideElements('beaker');
			this.hideElements('reset');
			this.hideElements('detergent');
			this.enableClickEvent('beaker_btn');
			this.setInnerHTML('instruction', model.instruction11);
			this.reset_clkcount++;
		}
		else if(this.reset_clkcount == 2){
			this.resetPage();
		}
	},

	/* microscopicView: Calls this method to view the microscopic analysis.
	When this method is called microscopic_analysis image is replaced with a gif image. Then after
	some time it is made hidden, followed with an instruction. */
	microscopicView:function(){
		if(this.microscopic_clkcount == 0){
			//view.loadPage('microscopic_analysis_1', model.htmlpages[0]);
			this.replaceElements('microscopic_analysis_1', model.images[0]);
			this.removeClickEvent('microscopic_analysis_link');
			setTimeout(function(){
				view.hideElements('microscopic_analysis_1');
			}, 20000);
			this.microscopic_clkcount++;
		}

		else if(this.microscopic_clkcount == 1){
			//view.loadPage('microscopic_analysis_2', model.htmlpages[3]);
			this.replaceElements('microscopic_analysis_2', model.images[3]);
			this.removeClickEvent('microscopic_analysis_link');
			setTimeout(function(){
				view.hideElements('microscopic_analysis_2');
			}, 30000);
		}

	},

	/* moveNeedle: Calls this method to move the needle into the beaker. 
	When this method is called needle is made visible and the click event for the needle button is disabled.
	Then the click event for the detergent button is made visible, followed with an instruction. */
	moveNeedle:function(){
		this.removeClickEvent('needle_btn');
		this.showElements('needle');
		setTimeout(function(){
			view.transitionElements('needle', 'translate(331px, 44px)');
		}, 2000);
		setTimeout(function(){
			view.transitionElements('needle', 'translate(331px, 130px)');
			view.enableClickEvent('detergent_btn');
			view.setInnerHTML('instruction', model.instruction8);
		}, 4000);
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