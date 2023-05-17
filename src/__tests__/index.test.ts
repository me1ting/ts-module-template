import { helloworld } from "../index.js";

test("helloworld works right", () => {
    expect(helloworld()).toBe("hello world");
});
