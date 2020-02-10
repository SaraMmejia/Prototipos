class Room{
    constructor(num){
        this.num=num;;
    }
    number(){
        return this.num
    }
    available(){
        return true
    }
    guests(){
        return 0
    }
}

const r1 = new Room(101)
console.log(r1.number());
console.log(r1.available());
console.log(r1.guests());


