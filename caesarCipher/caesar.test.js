const caesar = require("./caesar")

test("Test with only lowercase letters", () => {
    expect(caesar("hello",2)).toBe("jgnnq");
})

test("Test with uppercase letters", () => {
    expect(caesar("GobstopPer",5)).toBe("LtgxytuUjw");
})

test("Test with looping letters", () => {
    expect(caesar("Zach",7)).toBe("Ghjo");
})

test("Test with puncuation and spaces", () => {
    expect(caesar("Zach and Jack.",2)).toBe("Bcej cpf Lcem.");
})

