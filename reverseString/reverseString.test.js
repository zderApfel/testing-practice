const reverseString = require("./reverseString");

test("Reverses a string", () => {
    expect(reverseString("Hello")).toBe("olleH");
}) 

test("Reverses a string", () => {
    expect(reverseString("Big chairs and long hair")).toBe("riah gnol dna sriahc giB");
})