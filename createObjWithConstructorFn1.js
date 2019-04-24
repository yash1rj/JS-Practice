//Syntax
// function Name(param1,param2,param3) {
//     this.param1 = param1;
//     this.param2 = param2;
//     this.param3 = param3;
// };
//  
// var obj = new Name(p1,p2,p3);

function Employee(name,id,age){
    this.name = name;
    this.id = id;
    this.age = age;
    this.swipeIn = function() {console.log("Swipe in by "+this.id);}
}

emp1=new Employee("Emp1",100,56);
emp2=new Employee("Emp2",200,45);

console.log(emp1.age);
emp2.swipeIn();