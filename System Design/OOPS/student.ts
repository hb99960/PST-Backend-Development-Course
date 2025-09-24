class Student{
    regNo:string;
    name:string;

    constructor(regNo:string, name:string){
        this.name = name;
        this.regNo = regNo;
    }

    details():string{
        return `Student ${this.name} with registration ${this.regNo} is studying`;
    }
}

// object creation
let stud1:Student = new Student("ms01", "ABC");
console.log(stud1.name);
console.log(stud1.regNo);
console.log(stud1.details());