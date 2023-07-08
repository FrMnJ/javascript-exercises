let fib=[1,1];
function fibon(num){
    if(fib[num]!==undefined) return fib[num];
    else
        fib[num]=fibon(num-1)+fib[num-2];
    return fib[num];
}

const fibonacci = function(num) {
    if(num<0) return "OOPS";
    return fibon(parseInt(num)-1);
};

// Do not edit below this line
module.exports = fibonacci;
