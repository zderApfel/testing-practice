const capitalize = require("./capitalize");

test("capitalizes the first character", () => {
    expect(capitalize("hello")).toBe("Hello");
})

test("Does nothing to something that's already capitalized", () =>{
    expect(capitalize("Hello")).toBe("Hello");
})