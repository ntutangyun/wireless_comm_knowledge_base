import unittest
from validate_lessons import check_lesson, check_curriculum

VALID = {"80211-2024"}


class CheckLesson(unittest.TestCase):
    def test_ok_lesson(self):
        lesson = {"id": "x", "title": {"en": "T", "zh": "标"}, "blocks": [
            {"type": "prose", "en": "hello", "zh": "你好"},
        ]}
        self.assertEqual(check_lesson(lesson, VALID), [])

    def test_missing_zh_flagged(self):
        lesson = {"id": "x", "title": {"en": "T", "zh": "标"}, "blocks": [
            {"type": "prose", "en": "hello"},
        ]}
        errs = check_lesson(lesson, VALID)
        self.assertTrue(any("zh" in e for e in errs))

    def test_banned_term_flagged(self):
        lesson = {"id": "x", "title": {"en": "T", "zh": "标"}, "blocks": [
            {"type": "prose", "en": "this is a patent idea", "zh": "好"},
        ]}
        errs = check_lesson(lesson, VALID)
        self.assertTrue(any("banned" in e.lower() for e in errs))

    def test_bad_pdf_id_flagged(self):
        lesson = {"id": "x", "title": {"en": "T", "zh": "标"}, "blocks": [
            {"type": "deepdive", "en": "d", "zh": "d", "summary": {"en": "s", "zh": "s"},
             "cite": {"pdf_id": "made-up", "pages": [1]}},
        ]}
        errs = check_lesson(lesson, VALID)
        self.assertTrue(any("pdf_id" in e for e in errs))

    def test_widget_needs_id(self):
        lesson = {"id": "x", "title": {"en": "T", "zh": "标"}, "blocks": [{"type": "widget"}]}
        errs = check_lesson(lesson, VALID)
        self.assertTrue(any("widget" in e for e in errs))


class CheckCurriculum(unittest.TestCase):
    def test_missing_file_flagged(self):
        cur = {"tracks": [{"id": "t", "lessons": [{"id": "a"}, {"id": "b"}]}]}
        errs = check_curriculum(cur, {"a"})
        self.assertTrue(any("b" in e for e in errs))

    def test_duplicate_id_flagged(self):
        cur = {"tracks": [{"id": "t", "lessons": [{"id": "a"}, {"id": "a"}]}]}
        errs = check_curriculum(cur, {"a"})
        self.assertTrue(any("duplicate" in e.lower() for e in errs))


if __name__ == "__main__":
    unittest.main()
