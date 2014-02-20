FH.AppBackground = function(width, height){

	FH.AbstractView.call(this, width, height);

	this.init();
};

FH.AppBackground.constructor = FH.AppBackground;
FH.AppBackground.prototype = Object.create( FH.AbstractView.prototype );

FH.AppBackground.prototype.init = function(){	

	this.view = new PIXI.Graphics();
	this.view.setInteractive(true);

	this.draw();
};

FH.AppBackground.prototype.draw = function(){	

	this.view.beginFill(0x333333);
	this.view.drawRect(0, 0, window.innerWidth, window.innerHeight);

	this.view.hitArea = new PIXI.Circle(0, 0, 40);
};