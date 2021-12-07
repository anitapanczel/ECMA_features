/*
window.addEventListener("load", init);

function init() {
    console.log("hello");
}*/

//reduce

function minimum() {

    const numbers = [15, 5, 9, 159, 25];
    /*
    let minimum = numbers[0];
    
    console.log(minimum);
    
    for (let i = 0; i < numbers.length; i++) {
        if (minimum > numbers[i]) {
            minimum = numbers[i];
        }
    }
    */


    const reducer = (prev, cur) => Math.min(prev, cur);
    minimum = numbers.reduce(reducer);
    return minimum;

};

minimum();

function naming() {
    const names = ['Alice', 'Bob', 'Alice', 'Tiff', 'Ubul', 'Alice', 'Ubul'];
    const countNames = {};

    for (let i = 0; i < names.length; i++) {
        if (countNames[names[i]]) {
            countNames[names[i]]++;
        } else {
            countNames[names[i]] = 1;
        }
    }
    // console.log(countNames);


    let countedNames = names.reduce(function(allNames, name) {
        if (name in allNames) {
            allNames[name]++;
        } else {
            allNames[name] = 1;
        }
        return allNames;
    }, {})

    console.log(countedNames);

}

naming();

/*
 */

// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// callback

function multiply(callback, x, y) {
    return callback(x, y) * 10;
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

console.log(multiply(add, 2, 3));
console.log(multiply(sub, 2, 3));

// filter

const ages = [32, 33, 16, 40];

function checkAdult(age) {
    /*
    const resultArr = [];
    for (const age of ages) {
        if (age >= 18) {
            resultArr.push(age);
        }
    }
    return resultArr;*/
    return age >= 18;

}

const result = ages.filter(checkAdult);
console.log(result);

//map
function map() {
    const array1 = [2, 4, 8, 14];
    const map1 = array1.map(x => x * 3);
    console.log(map1);

    const map2 = array1.map(myFunction);

    function myFunction(num) {
        return num * 5;
    }
    console.log(map2);

    const map3 = array1.map((x, i) => x * i);
    console.log(map3);

    let array4 = [
        { key: 1, value: 10 },
        { key: 2, value: 20 },
        { key: 3, value: 30 }
    ]

    let reformattedArray = array4.map(obj => {
        let rObj = {};
        rObj[obj.key] = obj.value * 10;
        return rObj;
    })
    console.log(reformattedArray);

    var myObject = { 'a': 1, 'b': 2, 'c': 3 };

    Object.keys(myObject).map(function(key, index) {
        myObject[key] *= 2;
    });
    console.log(myObject);
}
map();

// copy objects - spread operator
function copy() {
    let person = {
        firstName: "John",
        lastName: "Doe",
        address: {
            "street": "Peachfield",
            "city": "Budapest",
            "country": "Hungary"
        },
        "wholeName": function() {
            return this.firstName + this.lastName;
        }
    }

    const person2 = person; // itt a kettő teljesen megegyező memóriára mutat, változtatás mindkettőben leképződik,tehát shallow copy
    console.log(person2 === person);

    const p1 = {...person }; //spread operator
    console.log(p1 === person); // itt false, mert másolódik, új példány képződik, de
    console.log(p1.address === person.address); //ez már true, tehát ugyanoda mutat
    let nums = [2, 3];
    let nums2 = [1, ...nums, 4];

    //console.log("p1:", p1);
    //p1.firstName = "Jule";
    //p1.address.street = "Boefeld Street";

    const p2 = Object.assign({}, person); //shallow copy
    console.log(p2 === person); //false
    console.log(p2.address === person.address); //true
    //p2.firstName = "Jane";
    //p2.address.street = "Main Street";
    //console.log("p2:", p2);

    const p3 = JSON.parse(JSON.stringify(person)); //JSON method, deep copy esetén a metódusok félremennek, nem hajtódik végre
    p3.firstName = "Jane";
    p3.address.street = "Main Street";
    console.log("person:", person);
    console.log("p3:", p3);
    console.log(p3 === person); //false
    console.log(p3.address === person.address); //false
}

copy();