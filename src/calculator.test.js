const { add, subtract, multiply } = require("./calculator");

test("add 2 + 3 = 5", () => { expect(add(2, 3)).toBe(5); });

test("subtract 5 - 2 = 3", () => { expect(subtract(5, 2)).toBe(3); });

test("multiply 3 x 4 = 12", () => { expect(multiply(3, 4)).toBe(12); });
