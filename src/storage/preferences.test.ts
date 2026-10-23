import { it, expect, vi } from "vitest";
import { readTheme, saveTheme } from "./preferences";
it("ignores invalid stored themes", () => {
  localStorage.setItem("powerlab.theme", "invalid");
  expect(readTheme()).toBe("light");
});
it("works when browser storage is unavailable", () => {
  const get = vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
    throw new Error("blocked");
  });
  const set = vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
    throw new Error("blocked");
  });
  expect(readTheme()).toBe("light");
  expect(() => saveTheme("dark")).not.toThrow();
  get.mockRestore();
  set.mockRestore();
});
