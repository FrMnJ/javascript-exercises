const sumAll = function(from,to ) {
    if(typeof from !== 'number'||typeof to !=='number') return "ERROR";
    if(from<0||to<0) return "ERROR";
    let res=0;
    let min=Math.min(from,to);
    let max=Math.max(from,to);
    from=min;
    to=max;
    for(let i=from;i<=to;i++) res+=i;
    return res;
};

// Do not edit below this line
module.exports = sumAll;
