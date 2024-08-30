import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach, vi } from "vitest";

beforeEach(() => {
   cleanup();
});

afterEach(() => {
   vi.clearAllMocks();
});
