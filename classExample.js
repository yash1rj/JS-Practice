class Employee {
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }

    swipeIn() {
        console.log("Employee "+this.name+" swiped in at "+new Date());
    }

    static code() {
        console.log("Employee is coding");
    }
}

class PartTimeEmployee extends Employee {
    constructor(id,name,age,contract){
        super(id,name,age);
        this.contract=contract;
    }
}

e1 = new Employee(101,"mark",23);
e2 = new PartTimeEmployee(102,"jane",21,6);
PartTimeEmployee.code();
e2.swipeIn();
console.log("Internshp period of Employee "+e2.name+" is "+e2.contract+" months.");