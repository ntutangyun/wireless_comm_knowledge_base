import { test } from "node:test";
import assert from "node:assert/strict";
import { subchannels, effectiveWidth } from "./channel-width.js";

test("subchannels counts 20 MHz pieces", () => {
  assert.equal(subchannels(20), 1);
  assert.equal(subchannels(160), 8);
  assert.equal(subchannels(320), 16);
});
test("effectiveWidth with no puncturing equals full width", () => {
  assert.equal(effectiveWidth(320, []), 320);
});
test("puncturing removes 20 MHz per punctured subchannel", () => {
  assert.equal(effectiveWidth(160, [0]), 140);
  assert.equal(effectiveWidth(80, [1, 2]), 40);
});
test("out-of-range / duplicate punctures ignored", () => {
  assert.equal(effectiveWidth(80, [9, 9, 1]), 60);
});
