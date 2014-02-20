FH.SoundOscillatorController = function(view){

	this.init(view);
};

FH.SoundOscillatorController.prototype.init = function(view){	

	this.view = view;
	this.oscillator = FH.SOUNDSERVICE.getOscillator();
	this.filter = FH.SOUNDSERVICE.getSoundFilter();

	this.createSound();
	this.addEventListeners();
};

FH.SoundOscillatorController.prototype.addEventListeners = function(){	

	var _this = this;

	// this.view.view.mousemove = this.view.touchmove = function(data){
	// 	console.log("fre")
	// 	var f = 200 * (_this.view.view.y/window.innerHeight);
	// 	_this.oscillator.frequency = f;
	// };


	// this.view.view.mousemove = this.view.touchmove = function(data){
	// 	console.log("fre")
	// 	var f = 200 * (_this.view.view.y/window.innerHeight);
	// 	_this.oscillator.frequency = f;
	// };
	
	
	this.view.addEventListener("oscillator-view-moving", function(e){

		var f = 200 * (e.view.y/window.innerHeight);
		_this.oscillator.frequency = f;

	});

	this.view.addEventListener("fh-item-double-click", function(e){
		this.view.destroy();
	});
};

// FH.SoundOscillatorController.prototype.destroy = function(){	

// };

FH.SoundOscillatorController.prototype.createSound = function(){	
	
	this.oscillator.play();
	this.oscillator.connect( CONTEXT.destination );

	this.filter.connect( CONTEXT.destination );
	this.filter.cutOffFrequency = 200;
};