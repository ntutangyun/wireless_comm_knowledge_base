import { test } from "node:test";
import assert from "node:assert/strict";
import { parseHash, buildHash } from "./router.js";

test("parseHash empty -> home", () => {
  assert.deepEqual(parseHash(""), { trackId: null, lessonId: null });
  assert.deepEqual(parseHash("#/"), { trackId: null, lessonId: null });
});
test("parseHash track only", () => {
  assert.deepEqual(parseHash("#/foundations"), { trackId: "foundations", lessonId: null });
});
test("parseHash track + lesson", () => {
  assert.deepEqual(parseHash("#/foundations/foundations-01-what-is-wifi"),
    { trackId: "foundations", lessonId: "foundations-01-what-is-wifi" });
});
test("buildHash round-trips", () => {
  assert.equal(buildHash(), "#/");
  assert.equal(buildHash("foundations"), "#/foundations");
  assert.equal(buildHash("foundations", "x"), "#/foundations/x");
  assert.deepEqual(parseHash(buildHash("t", "l")), { trackId: "t", lessonId: "l" });
});
