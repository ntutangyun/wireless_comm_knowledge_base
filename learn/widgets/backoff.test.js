import { test } from "node:test";
import assert from "node:assert/strict";
import { computeBackoff, nextCw } from "./backoff.js";

test("computeBackoff in [0, cw]", () => {
  assert.equal(computeBackoff(15, () => 0), 0);
  assert.equal(computeBackoff(15, () => 0.9999), 15);
  assert.equal(computeBackoff(31, () => 0.5), 16);
});
test("nextCw doubles+1 capped at cwMax", () => {
  assert.equal(nextCw(15, 1023), 31);
  assert.equal(nextCw(511, 1023), 1023);
  assert.equal(nextCw(1023, 1023), 1023);
});
