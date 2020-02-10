class Square {
    constructor(side){
        this.side=side;
    }

    area(){
        return this.side*this.side
    }
    perimeter(){
        return this.side*4
    }
}

const  s1 = new Square(5)
console.log(s1.area());
console.log(s1.perimeter());