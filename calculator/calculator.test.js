const calculator = require("./calculator");

test("Adds two numbers", () => {
    expect(calculator("add", 4, 6)).toBe(10);
})

test("Subtracts two numbers", () => {
    expect(calculator("sub", 76, 77)).toBe(-1);
})

test("Multiplies two numbers", () => {
    expect(calculator("multiply", 6, 5)).toBe(30);
})

test("Divides two numbers", () => {
    expect(calculator("divide", 10, 2)).toBe(5);
})