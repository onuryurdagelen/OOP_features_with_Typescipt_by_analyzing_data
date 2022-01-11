"use strict";
//NOTHING TO DO WITH GENERICS
const add = (a, b) => {
    return a + b;
};
add(10, 1);
add(10, 2);
add(10, 3);
/*
const addTwo = (a: number) : number =>{
    return a + 2;
}

const addThree = (a: number) : number =>{
    return a + 3;
}
*/
/*
class HoldNumber {
    data: number;
}
class HoldString{
    data:string;
}

// const holdNumber = new HoldNumber();
// holdNumber.data = 123;

// const holdString = new HoldString();
// holdString.data = 'asdasd';

*/
//GENERICS
class HoldAnything {
    add(a) {
        return a;
    }
}
const holdNumber = new HoldAnything();
holdNumber.data = 123;
holdNumber.add(1234);
console.log(holdNumber.data);
const holdString = new HoldAnything();
holdString.data = 'asdasda';
holdString.add('String');
console.log(holdString.data);
