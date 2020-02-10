const Rooms = require('./room');

it("should show the correct room number ",()=>{
    const r1 = new Rooms(101)
    expect(r1.rNumber()).toBe(101)
});

