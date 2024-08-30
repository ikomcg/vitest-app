import { describe, expect, test } from "vitest";
import { isPassedGrade } from "../helper/passed-grade";

describe("Test Passing Grade", () => {
   test("should return true if grade is greater than or equal to 75", () => {
      expect(isPassedGrade(75)).toBeTruthy();
   });

   test("should return false if grade is less than 75", () => {
      expect(isPassedGrade(74)).toBeFalsy();
   });

   test("should return true even if the grade is less than 75 and exempted", () => {
      expect(isPassedGrade(74, true)).toBeTruthy();
   });
});
