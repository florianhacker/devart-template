FH.SoundFilter = function( filterType, cutOffFrequency ){

    // extend Gain
    this.filter = CONTEXT.createBiquadFilter(1);

	FH.GainNode.call( this, this.filter );

    this.init( filterType, cutOffFrequency )
};

FH.SoundFilter.constructor = FH.SoundFilter;
FH.SoundFilter.prototype = Object.create( FH.GainNode.prototype );

FH.SoundFilter.prototype.init = function(filterType, cutOffFrequency){	

    console.log("SoundFilter init", filterType, cutOffFrequency)

    this.filterType = filterType;
    this.cutOffFrequency = cutOffFrequency;

	this.filter.connect(this.gainNode);
};


Object.defineProperty(FH.SoundFilter.prototype, 'cutOffFrequency', {
    
    get: function() {

        return this.filter.frequency.value;
    },
    set: function(value) {

        console.log("set cutOffFrequency to", value)
        this.filter.frequency.value = value;
    }
});


Object.defineProperty(FH.SoundFilter.prototype, 'intensity', {
    
    get: function() {

        return this.filter.frequency.value;
    },
    set: function(value) {

        console.log("set filterIntensity to", value, this.filter)
        this.filter.gain.value = value;
    }
});


Object.defineProperty(FH.SoundFilter.prototype, 'filterType', {

    // "lowpass",
    // "highpass",
    // "bandpass",
    // "lowshelf",
    // "highshelf",
    // "peaking",
    // "notch",
    // "allpass"

    get: function() {

        return this.filter.type;
    },
    set: function(value) {

        console.log('set filter type to ', value, this.filter );
        this.filter.type = value;
    }
});