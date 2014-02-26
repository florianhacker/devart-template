FH.MainView = function(width, height){

	FH.AbstractView.call(this, width, height);

	this.init(width, height);
};

FH.MainView.constructor = FH.MainView;
FH.MainView.prototype = Object.create( FH.AbstractView.prototype );

FH.MainView.prototype.init = function(width, height){	
	
	this.addEventListeners();

	this.draw();
};

FH.MainView.prototype.addEventListeners = function(){
	
	document.body.addEventListener('dblclick', this.createOscillator.bind(this) );
};

FH.MainView.prototype.createOscillator = function(){

	var soundOscillatorView = new FH.SoundOscillatorView();
	document.body.appendChild( soundOscillatorView.view );

	this.dispatchEvent( { type: 'oscillator-view-created', view : soundOscillatorView });
};



FH.MainView.prototype.draw = function(){	

};