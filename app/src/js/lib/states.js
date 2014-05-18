module.exports = {
	getState: function (pin, callback) {

		//no pins greater than 13

		if (pin > 13) {
			return callback(false);
		}
		else{
			return callback(true);
		}
	},
	setState: false
} 