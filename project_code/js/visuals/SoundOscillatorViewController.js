FH.SoundOscillatorController = function(view){

	this.init(view);
};

FH.SoundOscillatorController.prototype.init = function(view){	

	this.model = new FH.SoundOscillatorModel();

	this.view = view;
	this.view.addModel(this.model);

	this.addEventListeners();
};

FH.SoundOscillatorController.prototype.addEventListeners = function(){	

	var _this = this;
	
	this.view.addEventListener("oscillator-view-moving", function(e){
		// add a minium of 20 hz
		var oscillatorFrequency = 20 + (80 * (e.view.y/window.innerHeight) );
		_this.model.oscillator.frequency = oscillatorFrequency;

		var cutoffFilterFrequency = 20 + (20000 * (e.view.x/window.innerWidth) );
		_this.model.filter.cutOffFrequency = cutoffFilterFrequency;
	});

	this.view.addEventListener("fh-item-double-click", function(e){
		this.view.destroy();
	});
};