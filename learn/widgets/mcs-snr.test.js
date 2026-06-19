import { test } from "node:test";
import assert from "node:assert/strict";
import { mcsForSnr, MCS_TABLE } from "./mcs-snr.js";

test("below lowest threshold -> null (no link)", () => {
  assert.equal(mcsForSnr(0), null);
  assert.equal(mcsForSnr(4), null);
});
test("just above lowest threshold -> MCS 0", () => {
  assert.equal(mcsForSnr(5).mcs, 0);
});
test("very high SNR -> top MCS (4096-QAM)", () => {
  const top = MCS_TABLE[MCS_TABLE.length - 1];
  assert.equal(mcsForSnr(100).mcs, top.mcs);
  assert.equal(mcsForSnr(100).mod, "4096-QAM");
});
test("monotonic: higher SNR never lowers MCS", () => {
  let prev = -1;
  for (let s = 0; s <= 60; s++) {
    const r = mcsForSnr(s);
    const m = r ? r.mcs : -1;
    assert.ok(m >= prev, `mcs dropped at snr ${s}`);
    prev = m;
  }
});
