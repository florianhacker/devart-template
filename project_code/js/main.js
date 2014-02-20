var FH = FH || {};

function init(){

	// global context
	CONTEXT = new webkitAudioContext();

	var mainView = new FH.MainView(window.innerWidth, window.innerHeight);
	var mainViewController = new FH.MainViewController(mainView);
}