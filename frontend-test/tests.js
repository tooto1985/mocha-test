var expect = chai.expect;
describe("Hello", function() {
	it("test 1", function() {
		expect(hello()).to.be.equal("Hello world!");
	});
	it("test 2", function() {
		expect(hello(1)).to.be.equal(false);
	});
});