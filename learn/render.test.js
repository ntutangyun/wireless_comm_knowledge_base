import { test } from "node:test";
import assert from "node:assert/strict";
import { blockKind } from "./render.js";

test("blockKind reads type", () => {
  assert.equal(blockKind({ type: "prose", en: "x" }), "prose");
});
test("blockKind defaults unknown", () => {
  assert.equal(blockKind({}), "unknown");
  assert.equal(blockKind(null), "unknown");
});
