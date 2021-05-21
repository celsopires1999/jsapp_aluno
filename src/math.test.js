const sub = require('./sub');
const sum = require('./sum');
const mult = require('./mult');
const div = require ('./div')

test("add 1 + 2 to be equal 3", ()=> {
    expect(sum(1,2)).toBe(3);
});

test("sub 2 - 1 to be equal 1", ()=> {
    expect(sub(2,1)).toBe(1);
});

test("multiply 2 by 2 equal 4", ()=> {
    expect(mult(2,2)).toBe(4);
});

test("divide 2 by 2 equal 1", ()=> {
    expect(div(2,2)).toBe(1);
});