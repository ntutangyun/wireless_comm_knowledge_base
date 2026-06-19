import { test } from "node:test";
import assert from "node:assert/strict";
import { ProgressStore } from "./progress.js";

function fakeStorage() {
  const m = new Map();
  return { getItem: k => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)) };
}

test("markComplete / isComplete persist", () => {
  const s = fakeStorage();
  const p = new ProgressStore(s);
  assert.equal(p.isComplete("a"), false);
  p.markComplete("a");
  assert.equal(p.isComplete("a"), true);
  // survives reload
  assert.equal(new ProgressStore(s).isComplete("a"), true);
});
test("completedIn counts intersection", () => {
  const p = new ProgressStore(fakeStorage());
  p.markComplete("a"); p.markComplete("b");
  assert.equal(p.completedIn(["a", "b", "c"]), 2);
  assert.equal(p.completedIn(["c"]), 0);
});
test("setLast / getLast", () => {
  const s = fakeStorage();
  const p = new ProgressStore(s);
  assert.equal(p.getLast(), null);
  p.setLast("lesson-x");
  assert.equal(new ProgressStore(s).getLast(), "lesson-x");
});
test("corrupt storage degrades to empty", () => {
  const s = fakeStorage(); s.setItem("learn_progress", "{not json");
  const p = new ProgressStore(s);
  assert.equal(p.isComplete("a"), false);
});
