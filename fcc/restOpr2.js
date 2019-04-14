const sum = (function() {
    "use strict";
    return function sum(x, y, z) {
        const args = [ x, y, z ];
        return args.reduce((a, b) => a + b, 0);
    };
})();

console.log(sum(1, 2, 3)); // 6

// The above is same as below using rest operator.

const sum2 = (function() {
    "use strict";
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();

console.log(sum2(1, 2, 3)); // 6