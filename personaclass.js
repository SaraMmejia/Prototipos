Person class:
class Person {
    constructor(name,weight,height){
        this.name=name;
        this.weight=weight;
        this.height=height;
    }
    BMI(){
        return this.weight/Math.pow(this.height,2)
    }
    greet(p){
        return 'Hi '+ p['name']+', my name is '+ this.name
    }
}

var p1 = new Person("Pedro", 72, 1.5);
var p2 = new Person("Maria", 54, 1.7);

console.log(p1.BMI());
console.log(p2.BMI());
console.log(p1.greet(p2));
console.log(p2.greet(p1));