import { describe, expect, test } from "vitest";
import { makeFullName } from "../helper/make-name";

const fname = "John";
const lname = "Doe";

describe("makeFullName", () => {
   test("should return full name", () => {
      expect(makeFullName(fname, lname)).toBe("John Doe");
   });
});
