// parent
class Person{
    name:string;

    protected userId:string;


    constructor(name:string, userId:string){
        this.name = name;
        this.userId = userId;
    }

    intro():string{
        return `Hi I am ${this.name} with userID ${this.userId}`;
    }
}

let p1:Person = new Person("abc", "pst01");
console.log(p1.intro());

// child
class Employee extends Person{

    employeeDetails():string{
        return `${this.userId}`
    }

}

let e:Employee = new Employee("xyz", "pst02");

