import { test } from "node:test";
import assert from "node:assert/strict";
import { packRUs } from "./ofdma-ru.js";

test("frac sums to <= 1 and is proportional", () => {
  const out = packRUs([{ tones: 106 }, { tones: 106 }], 242);
  assert.equal(out.length, 2);
  assert.ok(Math.abs(out[0].frac - 106 / 242) < 1e-9);
  assert.ok(out[0].frac + out[1].frac <= 1 + 1e-9);
});
test("empty plan -> empty", () => {
  assert.deepEqual(packRUs([], 242), []);
});
