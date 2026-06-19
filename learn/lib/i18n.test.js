import { test } from "node:test";
import assert from "node:assert/strict";
import { pick } from "./i18n.js";

test("pick returns requested language", () => {
  assert.equal(pick({ en: "Hello", zh: "你好" }, "zh"), "你好");
  assert.equal(pick({ en: "Hello", zh: "你好" }, "en"), "Hello");
});
test("pick falls back to en when zh missing", () => {
  assert.equal(pick({ en: "Hello" }, "zh"), "Hello");
});
test("pick returns empty string for missing block", () => {
  assert.equal(pick(undefined, "en"), "");
  assert.equal(pick({}, "en"), "");
});
