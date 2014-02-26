FH.SoundOscillatorView = function( type, frequency ){

	this.init();
};

FH.SoundOscillatorView.constructor = FH.SoundOscillatorView;
FH.SoundOscillatorView.prototype = Object.create( FH.AbstractView.prototype );


FH.SoundOscillatorView.prototype.init = function(soundSpectrum){	

	this.view = document.createElement('div');
	this.view.className = "osc";

	this.arrowUp = document.createElement('span');
	this.arrowUp.className = "arrow-up";

	this.arrowDown = document.createElement('span');
	this.arrowDown.className = "arrow-down";

	this.arrowLeft = document.createElement('span');
	this.arrowLeft.className = "arrow-left";

	this.arrowRight = document.createElement('span');
	this.arrowRight.className = "arrow-right";

	this.view.appendChild(this.arrowUp);
	this.view.appendChild(this.arrowDown);
	this.view.appendChild(this.arrowLeft);
	this.view.appendChild(this.arrowRight);

	this.helper = 0;

	this.addEventListeners();
};


FH.SoundOscillatorView.prototype.addEventListeners = function(soundSpectrum){

	var _this = this;

	this.view.addEventListener('dblclick', function(e){
		e.stopPropagation();
		e.preventDefault();	
	});

	this.arrowUp.addEventListener('click', function(e){
		_this.dispatchEvent( {type: 'change-octave-up'} );	
	});

	this.arrowDown.addEventListener('click', function(e){
		_this.dispatchEvent( {type: 'change-octave-down'} );	
	});


	var hammertime = new Hammer( _this.view );
	
	hammertime.on("drag", function(ev) {

		var x = ev.gesture.center.pageX;
		var y = ev.gesture.center.pageY;

		_this.view.style.left = x + "px";
		_this.view.style.top = y + "px";

		_this.dispatchEvent( { type: 'oscillator-view-moving', position : { x : x, y : y }});

	});


	// this.view.mousedown = this.view.touchstart = function(data){

	// 	data.originalEvent.preventDefault();
		
	// 	_this.data = data;
	// 	_this.dragging = true;
	// };

	// this.view.mousemove = this.view.touchmove = function(data){

	// 	if(_this.data && _this.dragging){
	// 		var newPosition = _this.data.getLocalPosition(_this.view.parent);
	// 		_this.view.position.x = newPosition.x;
	// 		_this.view.position.y = newPosition.y;

	// 		_this.dispatchEvent( { type: 'oscillator-view-moving', view : _this.view });
	// 	}
	// };

	// this.view.mouseup = this.view.mouseup = function(data){
		
	// 	_this.dragging = null;
	// };
	
};

FH.SoundOscillatorView.prototype.addModel = function(model){
	
	var _this = this;
	this.model = model;

	this.model.analyzer.addEventListener('sound-analayzed', function(data){

		if(data){
			_this.drawSpectrum(data.soundSpectrum);
		}
	});

};

FH.SoundOscillatorView.prototype.destroy = function(soundSpectrum){

	this.dispatchEvent( { type: 'oscillator-view-destroyed' });
};


FH.SoundOscillatorView.prototype.drawSpectrum = function(soundSpectrum){

// 	var frequency = Math.floor(this.model.oscillator.frequency);
// //	console.log(frequency)

// 	var frequencies = soundSpectrum;//[10,10,10,10,10,10,10, 10, 10, 10, 10, 10];
// 	var amount = (Math.PI*2)/(frequencies.length-1);//frequencies.length;    

// 	this.view.clear();
// 	this.view.beginFill(0xFF0000);
// 	this.view.lineStyle(1, 0xFF0000);

// 	this.helper+= frequency/1000;
	
// 	for (var i=0; i < frequencies.length; i++)
// 	{
// 		//var volume = 100 + frequencies[i]*0.09;
// 		var volume = 100 + ( Math.sin(this.helper) );
//     	this.view.lineTo( volume*Math.cos(amount*i), volume*Math.sin(amount*i));
// 	}
// 	this.view.endFill();

// 	this.view.hitArea = new PIXI.Circle(0, 0, 100);
};






