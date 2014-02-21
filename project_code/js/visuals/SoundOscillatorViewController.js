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
		var f = 200 * (e.view.y/window.innerHeight);
		_this.model.oscillator.frequency = f;

	});

	this.view.addEventListener("fh-item-double-click", function(e){
		this.view.destroy();
	});
};