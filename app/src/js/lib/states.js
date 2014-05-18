module.exports = {
	getState: function (pin, callback) {

		if (pin > 13) {
			return callback(false);
		}
		else{
			return callback(true);
		}
	},
	setState: false
} 