var chai = require('chai');
var expect = chai.expect;

var BST = require('../lib/awesome-bst');

describe('BST', function() {
   
    var bst = new BST.AwesomeBST();
    
    describe('size()', function() { 
        it('handles empty case', function() {
            expect(bst.size()).to.equal(0);
        });
        it('increments as expected', function() {
            bst.add(12); 
            expect(bst.size()).to.equal(1);
            bst.add(2);
            expect(bst.size()).to.equal(2);
        });
        it('decrements as expected');
    });

    describe('From Array', function() { 
        
        it('takes array input', function() { 
            bst.loadFrom([12,4,5,19,3]);
            expect(bst.size()).to.equal(5);
        });

    });

});
