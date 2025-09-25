class Calculator{

    sum(n1:number, n2:number):number;
    sum(n1:string, n2:string):string;

    sum(n1:any, n2:any):any{
        if(typeof n1 == "number" && typeof n2 == "number"){
            return n1+n2;
        } else if(typeof n1 == "string" && typeof n2 == "string"){
            return "Joined string is " + n1 + " " + n2;
        } else {
            throw new Error("Undefiend");
        }
    }
}

let c:Calculator = new Calculator();
console.log(c.sum(1,2));
console.log(c.sum("Hello", "world!!"));