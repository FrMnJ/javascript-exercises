const palindromes = function (str) {
    let res="";
    for(let i=0;i<str.length;i++){
        if((str[i].toLowerCase()>='a'&&str[i].toLowerCase()<='z')||(str[i]>='0'&&str[i]<='9')) res+=str[i].toLowerCase();
    }
    const reversedStr=res.split("").reverse().join("");
    if(reversedStr===res) return true;
    else return false;
};  


// Do not edit below this line
module.exports = palindromes;
