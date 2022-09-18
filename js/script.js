const button =document.querySelector("#click")
const body = document.querySelector("body");


const arr=["Apple","Orange","Grapes","Pineapple"];


// select two element from array
const filterArray= arr.filter((item)=>  typeof item >="Pineaple" && item >="Orange")
console.log(filterArray);
document.querySelector("#filter").innerHTML = filterArray;


// choose one element from the array
const findItem = arr.find((item) => item === "Apple");
const findItemNext = arr.findIndex((item) => item ==="Apple");

console.log(findItem);
document.querySelector("#find").innerHTML = findItem;


//but all the element in anthor array
const map1 = arr.map(x => x )
console.log(map1);
document.querySelector("#map").innerHTML = map1;



// creat real time clock
function time(){
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    document.write(h + ":" + m + ":" + s);
}

document.querySelector(".find").innerHTML = time();
