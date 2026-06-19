import { test } from "node:test";
import assert from "node:assert/strict";
import { gradeQuiz } from "./quiz.js";

test("all correct", () => {
  const r = gradeQuiz([0, 2], [0, 2]);
  assert.deepEqual(r, { correct: 2, total: 2, perItem: [true, true] });
});
test("partial", () => {
  const r = gradeQuiz([0, 1], [0, 2]);
  assert.deepEqual(r, { correct: 1, total: 2, perItem: [true, false] });
});
test("unanswered counts wrong", () => {
  const r = gradeQuiz([null, 2], [0, 2]);
  assert.equal(r.correct, 1);
  assert.equal(r.perItem[0], false);
});
