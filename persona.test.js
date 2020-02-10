const Person = require ('./person')

it("should show the correct BMI ",()=>{
    const p1 = new Person('Pedro', 72, 1.5)
    expect(p1.BMI()).toBe(32)
});

it("should show the correct greetings",()=>{
    const p2 = new Person('Pedro', 72, 1.5)
    const p3 = new Person('Maria', 54, 1.7)
    expect(p2.greet(p3)).toBe('Hi Maria, my name is Pedro')
});