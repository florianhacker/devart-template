var FH = FH || {};

function init(){

	var oscillator = new FH.SoundOscillator(0, 400);
	oscillator.play();

}


// var context = new webkitAudioContext();
// oscillator1 = context.createOscillator(); // Create sound source 1
// // oscillator2 = context.createOscillator(); // Create sound source 2
// // oscillator3 = context.createOscillator(); // Create sound source 3
// // gainNode2 = context.createGainNode(); // Create gain node 2
// // gainNode3 = context.createGainNode(); // Create gain node 3

// oscillator1.type = 0; // Sine wave
// oscillator1.frequency.value = 200; // Default frequency in hertz
// oscillator1.connect(context.destination); // Connect sound source 1 to output
// oscillator1.noteOn(0); // Play sound source 1 instantly

// oscillator2.type = 1; // Square wave
// oscillator2.frequency.value = 100; // Frequency in hertz
// oscillator2.connect(gainNode2); // Connect sound source 2 to gain node 2
// gainNode2.connect(context.destination); // Connect gain node 2 to output
// gainNode2.gain.value = 0.3; // Set gain node 2 to 30 percent
// oscillator2.noteOn(2); // Play sound source 2 after two seconds

// oscillator3.type = 3; // Triangle wave
// oscillator3.frequency.value = 50; // Frequency in hertz
// oscillator3.connect(gainNode2); // Connect sound source 3 to gain node 3
// gainNode3.connect(context.destination); // Connect gain node 3 to output
// gainNode3.gain.value = 0.8 // Set gain node 3 to 80 percent
// oscillator3.noteOn(4); // Play sound source 3 after four seconds	