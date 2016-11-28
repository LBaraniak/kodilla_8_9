// plik scripts.js

var heightTree = prompt('Jak wysoka ma być choinka:');
	

function rysujChoinke(heightTree) {
	for (var i = 1; i <= heightTree; i++) {
		var star = '';
		for (var k = 1; k <= heightTree - i; k++) {
			star += ' ';
		}
		for (var j = 1; j <= i*2-1; j++) {
			star += '*';
		}
		console.log(star);
	}
}
	
var wynik = rysujChoinke(heightTree);

