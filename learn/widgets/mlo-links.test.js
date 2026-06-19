import { test } from "node:test";
import assert from "node:assert/strict";
import { activeThroughput } from "./mlo-links.js";

const links = [{ band: "2.4", rate: 200, on: true }, { band: "5", rate: 1200, on: true }, { band: "6", rate: 2400, on: true }];

test("STR sums all active links", () => {
  assert.equal(activeThroughput(links, "STR"), 3800);
});
test("EMLSR uses the single best active link", () => {
  assert.equal(activeThroughput(links, "EMLSR"), 2400);
});
test("NSTR (simplified) also one-at-a-time -> best active", () => {
  assert.equal(activeThroughput(links, "NSTR"), 2400);
});
test("only-on links count", () => {
  const some = [{ rate: 200, on: false }, { rate: 1200, on: true }];
  assert.equal(activeThroughput(some, "STR"), 1200);
});
test("nothing on -> 0", () => {
  assert.equal(activeThroughput([{ rate: 200, on: false }], "STR"), 0);
});
