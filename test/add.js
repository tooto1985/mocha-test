var should = require('should');
var add = require('../add.js');

describe('#add', function(){
    it('a+b', function(done){
        add(5,3).should.equal(8);
        done();
    });
    it("a+b 2", function(done) {
    	add(1,2).should.equal(3);
    	done();
    });
});