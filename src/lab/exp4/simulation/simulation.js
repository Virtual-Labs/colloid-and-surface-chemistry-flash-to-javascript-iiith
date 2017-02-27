var model={

	instruction1: 'Select the beaker from the apparatus to begin the experiment.',
	instruction2:'Beaker half-filled with soft water.Select talcum powder from the apparatus.',
	instruction3:'Select detergent from the apparatus.',
	instruction4:'The powder particles seperate and settle down.Click on the reset button.',
	instruction5:'Click on the beaker to begin the next experiment.',
	instruction6:'Beaker filled with soft water. Click on the Needle.',
	instruction7:'Carefully place the Needle on the surface of the water.Note that the Needle floats despite having more density than water.Select the detergent.',
	instruction8:'Needle starts sinking.Click on Reset',
	instruction9:'Select the beaker to experiment with hard-water.',
	instruction10:'Beaker half-filled with hard water.Select talcum powder from the apparatus.',
	instruction11:'Select detergent from the apparatus.',
	instruction12:'There is no effect till few more drops are added.',
	instruction13:'The powder particles seperate and settle down.Click on the reset button.',
	images: ['images/beaker2.png', 'images/beaker3.png'],
	dropimages: ['images/drop1.png', 'images/drop2.png']

}

var view ={
	/* Click counts on elements. Initial click will be considered as zero and then so on the
	click count is incremented to execute the instructions as per the count of the click. */
	beaker_clkcount:0,
	detergent_clkcount:0,

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
	changeImages: function(id) {
	    var i = 0,
	    image = document.getElementById(id);
	    setInterval( function () { 
		    if (i >= model.dropimages.length) {
		        return;
		    }
	        image.src = model.dropimages[i];
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

  	// activateEvents: Calls this method to add EventListener to an elements at once. When an element is 
	// clicked corresponding function gets executed.
	activateEvents: function() {
		this.addClickEvent('reset_btn', function() { view.resetPage(); });
		this.addClickEvent('beaker_btn', function() { view.showBeaker(); });
		this.addClickEvent('talcum_btn', function() { view.showTalcum(); });
		this.addClickEvent('detergent_btn', function() { view.showDetergent(); });
		this.addClickEvent('reset', function() { view.resetExperiment(); });
		this.addClickEvent('needle_btn', function() { view.moveNeedle(); });
	},

	// initialInstructions: Calls this method to execute the following method, when the page loads.
	// This method displays the first instruction to be performed.
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

	transitionElements: function(id, property){
		// document.getElementById(id).style.WebkitTransform = 'scale('+value1+', '+value2+')'; 
	 //    // Code for IE9
	 //    document.getElementById(id).style.msTransform = 'scale('+value1+', '+value2+')';
	 //    // Standard syntax
	 //    document.getElementById(id).style.transform = 'scale('+value1+', '+value2+')';

	 document.getElementById(id).style.WebkitTransform = property;
	 // Code for IE9
	 document.getElementById(id).style.msTransform = property;
	 // Standard syntax
	 document.getElementById(id).style.transform = property;
	},
	
	showBeaker: function(){
		if(this.beaker_clkcount == 0){
			this.removeClickEvent('beaker_btn');
			this.showElements('beaker');
			this.transitionElements('beaker', 'scale(1.5, 1.5)');
			this.enableClickEvent('talcum_btn');
			this.setInnerHTML('instruction', model.instruction2);
			this.beaker_clkcount++;
		}

		else if(this.beaker_clkcount == 1){
			this.removeClickEvent('beaker_btn');
			this.showElements('beaker');
			this.replaceElements('beaker', model.images[0]);
			this.transitionElements('beaker', 'scale(1, 1)');
			this.enableClickEvent('needle_btn');
			this.setInnerHTML('instruction', model.instruction6);
			this.beaker_clkcount++;
		}

		else if(this.beaker_clkcount == 2){
			this.removeClickEvent('beaker_btn');
			this.showElements('beaker');
			this.replaceElements('beaker', model.images[1]);
			this.transitionElements('beaker', 'scale(1, 1)');
		}
	},

	showTalcum: function(){
		this.removeClickEvent('talcum_btn');
		this.showElements('talcum_powder');
		this.transitionElements('talcum_powder', 'scale(2.5, 2.5) translate(56px, -84px) rotate(90deg)');

		setTimeout(function(){
			view.transitionElements('talcum_powder', 'scale(1, 1) translate(-84px, -104px) rotate(1deg)');
			view.enableClickEvent('detergent_btn');
			view.setInnerHTML('instruction', model.instruction3);
		}, 2000);
	},

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
				view.changeImages('drop1');
				view.transitionElements('drop1', 'translate(-25px, 192px)');
			}, 2000);

			setTimeout(function(){
				view.hideElements('drop1');
				view.transitionElements('detergent', 'scale(1, 1) translate(62px, -100px) rotate(-1deg)');
			}, 3000);

			setTimeout(function(){
				view.showElements('microscopic_analysis');
				view.showElements('reset');
				view.setInnerHTML('instruction', model.instruction4);
			}, 4000);
			this.detergent_clkcount++;
		}

		else if(this.detergent_clkcount == 1){
			this.removeClickEvent('detergent_btn');
			this.showElements('detergent');
			this.transitionElements('detergent', 'scale(2, 2) translate(-18px, -54px)');
			setTimeout(function(){
				view.transitionElements('detergent', 'scale(2, 2) translate(-28px, -60px) rotate(-33deg)');
			}, 1000);

			setTimeout(function(){
				view.showElements('drop2');
				view.changeImages('drop2');
				view.transitionElements('drop2', 'translate(-21px, 111px)');
			}, 2000);

			setTimeout(function(){
				view.hideElements('drop2');
				view.transitionElements('detergent', 'scale(1, 1) translate(41px, -32px) rotate(-1deg)');
			}, 3000);

			setTimeout(function(){
				view.showElements('reset');
				view.enableClickEvent('beaker');
				//view.setInnerHTML('instruction', model.instruction4);
			}, 4000);

			this.detergent_clkcount++;
		}
	},

	resetExperiment:function(){
		this.hideElements('talcum_powder');
		this.hideElements('beaker');
		this.hideElements('detergent');
		this.hideElements('microscopic_analysis');
		this.hideElements('reset');
		this.enableClickEvent('beaker_btn');
		this.setInnerHTML('instruction', model.instruction5);
	},

	moveNeedle:function(){
		this.removeClickEvent('needle');
		this.showElements('needle');
		setTimeout(function(){
			view.transitionElements('needle', 'translate(254px, 44px)');
		}, 2000);
		setTimeout(function(){
			view.transitionElements('needle', 'translate(254px, 74px)');
			view.enableClickEvent('detergent_btn');
			view.setInnerHTML('instruction', model.instruction7);
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