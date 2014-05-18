var expect = require("chai").expect;
var states = require("../src/js/lib/states");

describe("getting the state", function () {

	it("should be false if pin is greater than 13", function (done) {
		states.getState(14, function(result) {

			expect(result).to.equal(false);
			done();

		});
	})

	it("should be true if pin is less than 13", function (done) {
		states.getState(12, function(result) {

			expect(result).to.equal(true);
			done();

		});
	})

})