module.exports = {
	getState: function (pin, callback) {

		//no pins greter than 13

		if (pin > 13) {
			return callback(false);
		}
		else{
			return callback(true);
		}
	},
	setState: false
} 