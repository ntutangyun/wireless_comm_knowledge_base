import { test } from "node:test";
import assert from "node:assert/strict";
import { layoutFields } from "./frame-anatomy.js";

test("widths proportional to octets and sum to total", () => {
  const out = layoutFields([{ octets: 2 }, { octets: 2 }, { octets: 6 }], 100);
  assert.equal(out.length, 3);
  const sum = out.reduce((a, f) => a + f.w, 0);
  assert.ok(Math.abs(sum - 100) < 1.0);
  assert.equal(out[0].x, 0);
  assert.ok(out[2].w > out[0].w);
});
test("min width floor applied", () => {
  const out = layoutFields([{ octets: 1 }, { octets: 1000 }], 200);
  assert.ok(out[0].w >= 28);
});
