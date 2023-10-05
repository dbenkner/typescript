"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const friends_list_js_1 = require("./friends-list.js");
let FL = [
    new friends_list_js_1.Friend("Bill", 23, "b@mail.com", true),
    new friends_list_js_1.Friend("Steve", 33, "s@mail.com", true),
    new friends_list_js_1.Friend("Mary", 23, "m@mail.com", false),
    new friends_list_js_1.Friend("Lance", 36, "L@mail.com", false),
    new friends_list_js_1.Friend("Max", 43, "m@mail.com", true)
];
console.log("Name Age Email  BFF");
for (let F of FL) {
    console.log(`${F.name} ${F.age} ${F.email} ${F.bff ? "Yes" : "No"}`);
}
