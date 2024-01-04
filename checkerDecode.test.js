///DECODE TEST

// "cccc" key 2 decoded should give "aaaa"
// "aaaa" key -2 decoded should give "cccc"

const cipherDecode = require("./checkerDecode");


// 1st test


test("return cccc when given aaaa to encode with key 2", () => {
expect(cipherDecode("cccc", 2)).toBe("aaaa");
});


// 2nd Test

test("return yyyy when given aaaa to encode with key -2", () => {
    expect(cipherDecode("aaaa", -2)).toBe("cccc");
    });