FH.SoundEffect = function( filterType, cutOffFrequency ){

	this.filter = CONTEXT.createBiquadFilter();
	this.filterType = filterType;
	this.cutOffFrequency = cutOffFrequency;

	// extend Gain
	FH.GainNode.call( this, this.filter );
	this.init();
};

FH.SoundEffect.constructor = FH.SoundEffect;
FH.SoundEffect.prototype = Object.create( FH.GainNode.prototype );

FH.SoundEffect.prototype.init = function(){	

	this.filter.filterType = this.filterType  || 0;
	this.filter.frequency.value = this.cutOffFrequency || 300;

	this.filter.connect(this.gainNode);
};

Object.defineProperty(FH.SoundEffect.prototype, 'cutOffFrequency', {
    
    get: function() {
        return this.filter.frequency.value;
    },
    set: function(value) {
        this.filter.frequency.value = value;
    }
});