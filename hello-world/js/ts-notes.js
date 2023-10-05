"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
let anInt;
let aString;
let anObject = {};
let anull;
let bool;
var TrafficLights;
(function (TrafficLights) {
    TrafficLights[TrafficLights["Red"] = 0] = "Red";
    TrafficLights[TrafficLights["Yellow"] = 1] = "Yellow";
    TrafficLights[TrafficLights["Green = 2"] = 2] = "Green = 2";
})(TrafficLights || (TrafficLights = {}));
;
let tl = TrafficLights["Green = 2"];
// let wrong: TrafficLights = "blue";
let t = "1"; // lets you use any type useful if you're making a call to a method you didn't write
let udefined;
function Print() {
    console.log("end of print");
}
const PL = () => {
    console.log("end of print");
};
let doc = { copies: 1, reversed: false };
class PropertyExample {
    _name = "";
    get name() {
        return this._name;
    }
    set name(aName) {
        this._name = aName;
    }
}
let pe = new PropertyExample();
pe.name = "Bootcamp";
let bc = pe.name;
console.log(bc);
class ArrayList {
    arr = [];
    add(n) {
        this.arr.push(n);
    }
}
const log = (message) => {
    console.log(message);
};
class Customer {
}
exports.Customer = Customer;
