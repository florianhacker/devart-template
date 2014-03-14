FH.SoundOscillatorModel = function(oscillatorIndex, frequency){

	this.init(oscillatorIndex, frequency);
};

FH.SoundOscillatorModel.constructor = FH.SoundOscillatorModel;
FH.SoundOscillatorModel.prototype = Object.create( FH.AbstractView.prototype );

FH.SoundOscillatorModel.prototype.init = function(oscillatorIndex, frequency, filterFrequency){	
	
	this.analyzer = new FH.SoundAnalyzer();
	this.oscillator = FH.SOUNDSERVICE.getOscillator( oscillatorIndex, frequency );
	this.filter = FH.SOUNDSERVICE.getSoundFilter();
	//this.filter.cutOffFrequency = filterFrequency;

	this.createSound();
};


FH.SoundOscillatorModel.prototype.createSound = function(){	

	this.oscillator.connect( this.filter.input );

	this.filter.connect( this.analyzer.input );

	this.analyzer.connect( CONTEXT.destination );

	this.oscillator.play();

};