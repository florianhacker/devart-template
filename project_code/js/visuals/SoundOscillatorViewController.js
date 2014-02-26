FH.SoundOscillatorController = function(view){

	this.init(view);
};

FH.SoundOscillatorController.prototype.init = function(view){	

	// vars
	this.oscillatorIndex = 2;

	// init
	this.model = new FH.SoundOscillatorModel(this.oscillatorIndex);

	this.view = view;
	this.view.addModel(this.model);

	this.addEventListeners();
};

FH.SoundOscillatorController.prototype.addEventListeners = function(){	

	var _this = this;

	this.view.addEventListener("change-octave-up", function(e){
		
		if(_this.oscillatorIndex < 3) _this.oscillatorIndex++;
		_this.model.oscillator.waveform = _this.oscillatorIndex;
	});

	this.view.addEventListener("change-octave-down", function(e){

		if(_this.oscillatorIndex > 1) _this.oscillatorIndex--;
		_this.model.oscillator.waveform = _this.oscillatorIndex;
	});
	
	this.view.addEventListener("oscillator-view-moving", function(e){
		// add a minium of 20 hz
		var oscillatorFrequency = 20 + (80 * (e.position.y/window.innerHeight) );
		_this.model.oscillator.frequency = oscillatorFrequency;

		var cutoffFilterFrequency = 20 + (20000 * (e.position.x/window.innerWidth) );
		_this.model.filter.cutOffFrequency = cutoffFilterFrequency;
	});

	this.view.addEventListener("fh-item-double-click", function(e){
		this.view.destroy();
	});
};