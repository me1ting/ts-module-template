import { helloworld } from "../index";

test("helloworld works right", () => {
    expect(helloworld()).toBe("hello world");
});
