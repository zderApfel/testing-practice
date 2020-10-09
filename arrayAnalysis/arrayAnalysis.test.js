const analyze = require("./arrayAnalysis");

test("Data for 4 numbers", () => {
    expect(analyze([1,2,3,4])).toStrictEqual(
        {
            average: 3,
            min: 1,
            max: 4,
            length: 4
        })
})

test("Data for 11 numbers", () => {
    expect(analyze([10,23,412,12,6,9,1,4,78,9,4])).toStrictEqual(
        {
            average: 52,
            min: 1,
            max: 412,
            length: 11
        })
})