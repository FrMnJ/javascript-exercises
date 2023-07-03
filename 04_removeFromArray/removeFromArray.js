const removeFromArray = function(arr,...args) {
    const res=[]
    for(let i=0;i<arr.length;i++){
        let toNewArray=true;
        for(let j=0;j<arguments.length;j++)
            if(arr[i]===arguments[j]) toNewArray=false;
        if(toNewArray) res.push(arr[i]);
    }
    return res
};

// Do not edit below this line
module.exports = removeFromArray;
