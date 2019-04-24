// A closure is an inner function that has access to the variables present in the lexical 
// scope (parent scope) of the outer/containing function. 
// Therefore it can outlive the lifetime of the outer function and hence can continue 
// to access the variables of the outer function.

function outer() {
    var count = 0;
        function inner() {
            count=count + 1;
            return count;
        }
    return inner;
}

private_function=outer();

console.log(private_function());
console.log(private_function());
console.log(private_function());
    
// In the above example, the outer function is returning the inner function. 
// Thus we see that we are able to invoke the inner function many times without having 
// to invoke outer function each time.
// Closures allows us to access the inner function beyond the life time of the outer function.