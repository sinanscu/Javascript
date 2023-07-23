//!INHERİTANCE (MİRAS ALMA) KAVRAMI


//this

//!Inheritance ile hayatımıza giren kelimeler.
//super : Üst sınıfı gösterir.
//super()


class Person {

    constructor(firstName , lastName , salary){
        this.firstName  = firstName;
        this.lastName=lastName;
        this.salary = salary;
    }

    writeInfo(){
        console.log(this.firstName , this.lastName,this.salary)
    }
  
}


class Student extends Person{
    
    constructor(firstName , lastName, salary){
        super(firstName,lastName,salary);
    }

    writeInfo(){
        super.writeInfo();
    }
    
}

class Banker extends Person{
    constructor(firstName , lastName,salary){
        super(firstName,lastName,salary);
    }
    writeInfo(){
        super.writeInfo();
    }
}


let sinan=["Sinan","Sucu",1000]

const student1 = new Student(...sinan);
const engineer1 = new Banker("Kübra","Sucu", 14000);

student1.writeInfo();
engineer1.writeInfo();
