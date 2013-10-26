(function() {
    'use strict';
    
    function AwesomeBST () {
        this._root = {};
    }
    
    AwesomeBST.prototype.loadFrom = function(input) {
        if (!Array.isArray(input)) return;
        this._root = {}; //reset
        input.forEach(function(value) {
            this.add(value);
        }, this);
    };
    
    AwesomeBST.prototype.add = function(value) { 
        if (typeof this._root.value === 'undefined') return this._root = { value: value };
        var node = this.transverse(this._root, value);
        node.value = value;
        return node;
    };
    
    AwesomeBST.prototype.remove = function(value) { 
        //todo
    };
    
    AwesomeBST.prototype.orderedFrom = function(node) {
        if (typeof node === 'undefined') return [];
        return [].concat(this.orderedFrom(node.left), node.value, this.orderedFrom(node.right));        
    };    

    AwesomeBST.prototype.ordered = function () { return this.orderedFrom(this._root); };
 
    AwesomeBST.prototype.transverse = function(fromNode, value) {
        if (fromNode.value === value) return fromNode;
        else if (value > fromNode.value) return (typeof fromNode.right !== 'undefined') ? this.transverse(fromNode.right, value) : fromNode.right = { };
        else if (value < fromNode.value) return (typeof fromNode.left !== 'undefined') ? this.transverse(fromNode.left, value) : fromNode.left = { };
    };

    AwesomeBST.prototype.sizeFrom = function(fromNode) { 
        if (typeof fromNode === 'undefined') return 0;
        if (typeof fromNode.value === 'undefined') return 0;
        else return 1 + this.sizeFrom(fromNode.left) + this.sizeFrom(fromNode.right);       
    };
    
    AwesomeBST.prototype.size = function() { return this.sizeFrom(this._root); };

    var bst = {
        AwesomeBST: AwesomeBST 
    };

    if (module && module.exports) module.exports = bst;
    else if (window) window.BST = exports;
})();
