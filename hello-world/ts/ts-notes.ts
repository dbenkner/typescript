let anInt: number;
let aString: string;
let anObject: object = {};
let anull:null;
let bool: boolean;

enum TrafficLights {
    "Red" = 0, "Yellow" = 1, "Green = 2"
};

let tl : TrafficLights = TrafficLights["Green = 2"];

// let wrong: TrafficLights = "blue";

let t: any = "1"; // lets you use any type useful if you're making a call to a method you didn't write

let udefined: string;


function Print(): void {
    console.log("end of print");
}
const PL = () : void => {
    console.log("end of print");
}

interface IPrintable {
    copies: number;
    reversed: boolean;
}

let doc: IPrintable = {copies: 1, reversed: false};

class PropertyExample {
    _name: string = "";

    get name() {
        return this._name;
    }
    set name(aName: string) {
        this._name = aName;
    }
}

let pe = new PropertyExample();
pe.name = "Bootcamp";
let bc :string = pe.name;
console.log(bc);

class ArrayList<number> {
    arr: number[] = [];
    add(n:number): void {
        this.arr.push(n);
    }
}

const log = (message:string) => {
    console.log(message);
}

export class Customer {}