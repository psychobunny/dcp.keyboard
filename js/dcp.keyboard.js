var Keyboard = {};

(function() {
	Keyboard = function(callback) {
		if (!callback) return;

		var keys = document.getElementById('keyboard').getElementsByTagName('li'), key;
		for(key in keys) {
			if (keys.hasOwnProperty(key)) {
				keys[key].onclick = function() {
					callback(this.innerHTML[this.innerHTML.length - 1]);
				};
			}
		}
	};
}());