import {Friend} from "./friends-list.js";


let FL: Friend[] = [
    new Friend("Bill", 23, "b@mail.com", true),
    new Friend("Steve", 33, "s@mail.com", true),
    new Friend("Mary", 23, "m@mail.com", false),
    new Friend("Lance", 36, "L@mail.com", false),
    new Friend("Max", 43, "m@mail.com", true)
]


console.log("Name Age Email  BFF");
for (let F of FL){
    console.log(`${F.name} ${F.age} ${F.email} ${F.bff ? "Yes": "No"}`);
}