"use strict";
var Block = /** @class */ (function () {
    function Block(_a) {
        var timestamp = _a.timestamp, lastHash = _a.lastHash, hash = _a.hash, data = _a.data;
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }
    return Block;
}());
var block1 = new Block({
    timestamp: '010101',
    lastHash: '343243',
    hash: 'fsdfs',
    data: 'dada'
});
console.log(block1);
