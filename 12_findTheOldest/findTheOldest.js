const findTheOldest = function(people) {
    people.sort((a,b)=>{
        if(a.yearOfDeath===undefined) a.yearOfDeath=new Date().getFullYear();
        if(b.yearOfDeath===undefined) b.yearOfDeath=new Date().getFullYear();
        if((a.yearOfDeath-a.yearOfBirth)>(b.yearOfDeath-b.yearOfBirth)) return -1;
        return 1;
    });
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
