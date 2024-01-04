
// "aaaa" key 2 encoded should give "cccc"
// "aaaa" key -2 encoded should give "yyyy"
// "bb5bb" key 2 encoded should give "dd2dd"
// "bb bb" key 2 encoded should give  "dd dd"
// "bb%bb" key 2 encoded should give  "dd%dd"


///DECODE TEST

// "cccc" key 2 decoded should give "aaaa"
// "aaaa" key -2 decoded should give "cccc"

const cipherEncode = require("./checker");


// 1st test


test("return cccc when given aaaa to encode with key 2", () => {
expect(cipherEncode("aaaa", 2)).toBe("cccc");
});


// 2nd Test

test("return yyyy when given aaaa to encode with key -2", () => {
    expect(cipherEncode("aaaa", -2)).toBe("yyyy");
    });

// 3rd Test    

test("return dd2dd when given bb5bb to encode with key 2", () => {
        expect(cipherEncode("bb5bb", 2)).toBe("dd5dd");
        });

// 4th test

test("return bb bb when given bb bb to encode with key 2", () => {
    expect(cipherEncode("bb bb", 2)).toBe("dd dd");
    });

// 5th Test

test("return bb%bb when given bb%bb to encode with key 2", () => {
    expect(cipherEncode("bb%bb", 2)).toBe("dd%dd");
    });

