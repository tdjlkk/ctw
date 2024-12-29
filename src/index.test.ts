import { describe, expect, it } from "vitest";

import fs from "fs";
import path from "path";

import { ctw } from "../dist/index.js";

/* Build Tests (Whilst Rolldown Is Unstable) */
describe("build", () => {
  const distPath = path.resolve(__dirname, "../dist");
  const expectedFiles = ["index.js", "index.js.map", "index.d.ts"];

  it("should create dist directory", () => {
    const distExists = fs.existsSync(distPath);

    expect(distExists).toBe(true);
  });

  it("should generate all expected files", () => {
    expectedFiles.forEach((file) => {
      const filePath = path.join(distPath, file);
      const fileExists = fs.existsSync(filePath);

      expect(fileExists).toBe(true);
    });
  });
});

/* Function Tests */
describe("ctw", () => {
  it("should return an empty string for no arguments", () => {
    expect(ctw()).toBe("");
  });

  it("should handle basic string inputs", () => {
    expect(ctw("foo")).toBe("foo");
    expect(ctw("foo", "bar")).toBe("foo bar");
    expect(ctw("  foo  ", "  bar  ")).toBe("foo bar");
  });

  it("should handle arrays of strings", () => {
    expect(ctw(["foo", "bar"])).toBe("foo bar");
    expect(ctw(["foo"], ["bar"])).toBe("foo bar");
  });

  it("should handle falsy values", () => {
    expect(ctw(null, undefined, false, "")).toBe("");
    expect(ctw("foo", null, "bar", undefined)).toBe("foo bar");
  });

  it("should handle simple conditional expressions", () => {
    expect(ctw(true && "foo", false && "bar")).toBe("foo");
    expect(ctw(false && "foo", true && "bar")).toBe("bar");
  });

  it("should handle nested conditional arrays", () => {
    const variant = "solid";
    const disabled = true;

    expect(
      ctw(
        variant === "solid" && [
          "bg-primary",
          disabled && "cursor-not-allowed opacity-50",
        ]
      )
    ).toBe("bg-primary cursor-not-allowed opacity-50");
  });

  it("should handle multiple conditions in a string", () => {
    const isLarge = true;
    const isActive = true;

    expect(
      ctw(
        "base-class",
        isLarge && "text-lg",
        isActive && "bg-blue-500 text-white font-bold"
      )
    ).toBe("base-class text-lg bg-blue-500 text-white font-bold");
  });

  it("should trim whitespace properly", () => {
    expect(ctw("  foo  ", ["  bar  ", "  baz  "])).toBe("foo bar baz");
  });

  it("should handle number inputs", () => {
    expect(ctw(42)).toBe("42");
    expect(ctw("foo", 42)).toBe("foo 42");
    expect(ctw(1, 2, 3)).toBe("1 2 3");
    expect(ctw(3.14, "pi")).toBe("3.14 pi");
  });

  it("should handle arrays with numbers", () => {
    expect(ctw([1, 2, 3])).toBe("1 2 3");
    expect(ctw(["foo", 42, "bar"])).toBe("foo 42 bar");
    expect(ctw([1.5, "point", 5])).toBe("1.5 point 5");
    expect(ctw([true && 1, false && 2])).toBe("1");
  });

  it("should handle numbers in conditional expressions", () => {
    const count: number = 5;
    const zero: number = 0;

    expect(ctw(count && "has-items")).toBe("has-items");
    expect(ctw(zero && "has-items")).toBe("");
    expect(ctw(count === 5 && "five-items")).toBe("five-items");
    expect(ctw(count === 4 && "four-items")).toBe("");
    expect(ctw(count > 3 && "many-items")).toBe("many-items");
  });
});
