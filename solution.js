//1
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const secondCity = euroCities[1];

//2
euroCities[0] = "Berlin";

//3
console.log( euroCities.length );

//4
euroCities.pop();
console.log(euroCities);

//5
euroCities.push("Budapest");
console.log(euroCities);

//6
const asianCities = ["Xian", "Lhasa", "Luang Prabang", "Hoi An", "Intramuros Manila"];
console.log(asianCities);


//7
let worldCities = euroCities.concat(asianCities);
console.log(worldCities);

//8
worldCities = worldCities.reverse();

//9
euroCities.splice(2,1);
console.log(euroCities);

//10
const asianCitiesCopy = asianCities.slice(1,4);
console.log(asianCitiesCopy);

// //11
// console.log("11 " + worldCities);
// worldCities.splice(2,1,"Toronto");
// console.log(worldCities);

// //12
// worldCities.splice(1,0,"Washington");

// //13
// console.log( worldCities.join(",") );