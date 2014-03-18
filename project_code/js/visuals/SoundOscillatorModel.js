FH.SoundOscillatorModel = function(oscillatorIndex, frequency, filterType, filterFrequency){

	this.init(oscillatorIndex, frequency, filterType, filterFrequency);
};

FH.SoundOscillatorModel.constructor = FH.SoundOscillatorModel;
FH.SoundOscillatorModel.prototype = Object.create( FH.AbstractView.prototype );

FH.SoundOscillatorModel.prototype.init = function(oscillatorIndex, frequency, filterType, filterFrequency){	
	
	this.analyzer = new FH.SoundAnalyzer();
	this.oscillator = FH.SOUNDSERVICE.getOscillator( oscillatorIndex, frequency );
	this.filter = FH.SOUNDSERVICE.getSoundFilter(filterType, filterFrequency);	

	this.createSound();
};


FH.SoundOscillatorModel.prototype.createSound = function(){	

	this.oscillator.connect( this.filter.input );
	this.filter.connect( this.analyzer.input );
	this.analyzer.connect( CONTEXT.destination );

	this.oscillator.play();

};