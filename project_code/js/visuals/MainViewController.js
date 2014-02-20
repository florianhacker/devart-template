FH.MainViewController = function(view){
		
	this.view = view;

	this.init();
};

FH.MainViewController.prototype.init = function(){	
	
	this.addEventListeners();
};

FH.MainViewController.prototype.addEventListeners = function(){	
	
	var _this = this;

	this.view.addEventListener("oscillator-view-created", function(e){
		var soundOscillatorController = new FH.SoundOscillatorController(e.view);
	});

	this.view.addEventListener("oscillator-view-destroyed", function(e){
		
	});

	this.view.addEventListener("fh-item-double-click", function(e){

		_this.view.createOscillator();
	});
};