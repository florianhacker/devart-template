FH.MainView = function(width, height){

	FH.AbstractView.call(this, width, height);

	this.init(width, height);
};

FH.MainView.constructor = FH.MainView;
FH.MainView.prototype = Object.create( FH.AbstractView.prototype );

FH.MainView.prototype.init = function(width, height){	
	
	this.stage = new PIXI.Stage(0x000000, true);
	this.renderer = PIXI.autoDetectRenderer(width, height);
	document.body.appendChild(this.renderer.view);

	this.appBackground = new FH.AppBackground();
	this.stage.addChild(this.appBackground.view);

	this.initTouchGestures(this.stage);

	this.addEventListeners();

	this.draw();
};

FH.MainView.prototype.addEventListeners = function(){
	
};

FH.MainView.prototype.createOscillator = function(){

	var soundOscillatorView = new FH.SoundOscillatorView();

	this.stage.addChild(soundOscillatorView.view);
	this.dispatchEvent( { type: 'oscillator-view-created', view : soundOscillatorView });
};



FH.MainView.prototype.draw = function(){	

	var _this = this;

	function animate() {
		requestAnimFrame( animate );
		_this.renderer.render(_this.stage);
	}

	animate();
};