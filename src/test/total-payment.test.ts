import { describe, expect, test } from "vitest";
import totalPayment from "../helper/total-payment";

describe("Sum of product price", () => {
   test("should return sum of product price", () => {
      const products = [
         { name: "Product 1", price: 10 },
         { name: "Product 2", price: 20 },
         { name: "Product 3", price: 30 },
      ];

      expect(totalPayment(products)).toBe(60);
   });

   test("should throw an error if products is empty", () => {
      expect(() => totalPayment()).toThrow("Products not found");
   });
});
