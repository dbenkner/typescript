export class Friend {
    name:string;
    age:number;
    email:string;
    bff: boolean;

    constructor(aName: string, anAge:number, aEmail:string,
        aBff: boolean){
            this.name = aName;
            this.age = anAge;
            this.email = aEmail;
            this.bff = aBff;
        }
}

