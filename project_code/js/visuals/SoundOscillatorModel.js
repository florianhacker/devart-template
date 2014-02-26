FH.SoundOscillatorModel = function(oscillatorIndex){

	this.init(oscillatorIndex);
};

FH.SoundOscillatorModel.constructor = FH.SoundOscillatorModel;
FH.SoundOscillatorModel.prototype = Object.create( FH.AbstractView.prototype );

FH.SoundOscillatorModel.prototype.init = function(oscillatorIndex){	
	
	this.analyzer = new FH.SoundAnalyzer();
	this.oscillator = FH.SOUNDSERVICE.getOscillator( oscillatorIndex );
	this.filter = FH.SOUNDSERVICE.getSoundFilter();

	this.createSound();
};


FH.SoundOscillatorModel.prototype.createSound = function(){	
	
	this.oscillator.play();
	this.oscillator.connect( this.filter.input );

	this.filter.connect( this.analyzer.input );
	//this.filter.connect( CONTEXT.destination );

	this.analyzer.connect( CONTEXT.destination );

	this.filter.cutOffFrequency = 1000;
};