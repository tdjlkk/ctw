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
  it("should return a string", () => {
    expect(ctw()).toBe("");
  });

  it("should return a string from a string", () => {
    expect(ctw("foo bar baz")).toBe("foo bar baz");
  });

  it("should return a string from multiple strings", () => {
    expect(ctw("foo", "bar", "baz")).toBe("foo bar baz");
  });

  it("should return a string from an array of strings", () => {
    expect(ctw(["foo", "bar", "baz"])).toBe("foo bar baz");
  });

  it("should return a string from arrays of strings", () => {
    expect(ctw(["foo", "bar"], ["baz", "qux"])).toBe("foo bar baz qux");
  });

  it("should return a string from conditional strings", () => {
    expect(ctw(true && "foo", false && "bar")).toBe("foo");
  });

  it("should return a string from conditional arrays of strings", () => {
    expect(ctw(true && ["foo", "bar"], false && ["baz", "qux"])).toBe(
      "foo bar"
    );
  });

  it("should return a string from conditional strings and arrays of strings", () => {
    expect(ctw(true && "foo", false && ["bar", "baz"])).toBe("foo");
  });

  it("should return a string from multi-conditional strings and arrays of strings", () => {
    expect(ctw(true && true && "foo", false && false && ["bar"])).toBe("foo");
  });
});
