const Square = require("./square");

it("should show the correct perimeter ",()=>{
    const s1 = new Square(5)
    expect(s1.perimeter()).toBe(20)
});

it("should show the correct area",()=>{
    const s2 = new Square(5)
    expect(s2.area()).toBe(25)
});