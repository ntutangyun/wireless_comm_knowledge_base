import unittest
import tempfile
import xml.etree.ElementTree as ET
from pathlib import Path

import build_epub as be


class RenderBlockTests(unittest.TestCase):
    def setUp(self):
        be.warnings.clear()
        self.used = set()

    def rb(self, block, lang="zh"):
        return be.render_block(block, lang, "foundations", "foundations-01", self.used)

    def test_prose_zh(self):
        out = self.rb({"type": "prose", "en": "hello", "zh": "你好"})
        self.assertEqual(out, "<p>你好</p>")

    def test_prose_falls_back_to_en_with_warning(self):
        out = self.rb({"type": "prose", "en": "hello"})
        self.assertEqual(out, "<p>hello</p>")
        self.assertTrue(any("falling back" in w for w in be.warnings))

    def test_callout_note_label(self):
        out = self.rb({"type": "callout", "variant": "note", "en": "e", "zh": "中"})
        self.assertIn("备注", out)
        self.assertIn("中", out)

    def test_callout_unknown_variant_uses_tip_label(self):
        out = self.rb({"type": "callout", "variant": "mystery", "en": "e", "zh": "中"})
        self.assertIn("提示", out)

    def test_figure_renders_png_when_cached(self):
        svg = "<svg xmlns='http://www.w3.org/2000/svg'><rect/></svg>"
        with tempfile.TemporaryDirectory() as td:
            old = be.IMAGE_DIR
            be.IMAGE_DIR = Path(td)
            try:
                h = be.sha1(svg)
                (Path(td) / f"f-{h}.png").write_bytes(b"png")
                out = self.rb({"type": "figure", "svg": svg, "caption": {"en": "c", "zh": "图"}})
                self.assertIn(f"../images/f-{h}.png", out)
                self.assertIn("图", out)
                self.assertIn(("f", h), self.used)
                # compatibility: no HTML5-only tags, no inline svg
                for banned in ("<svg", "<figure", "<figcaption"):
                    self.assertNotIn(banned, out)
            finally:
                be.IMAGE_DIR = old

    def test_figure_missing_cache_is_fatal(self):
        with tempfile.TemporaryDirectory() as td:
            old = be.IMAGE_DIR
            be.IMAGE_DIR = Path(td)
            try:
                with self.assertRaises(SystemExit):
                    self.rb({"type": "figure", "svg": "<svg/>", "caption": {"en": "c", "zh": "图"}})
            finally:
                be.IMAGE_DIR = old

    def test_diagram_renders_png_when_cached(self):
        with tempfile.TemporaryDirectory() as td:
            old = be.IMAGE_DIR
            be.IMAGE_DIR = Path(td)
            try:
                h = be.sha1("graph TD; A-->B")
                (Path(td) / f"d-{h}.png").write_bytes(b"png")
                out = self.rb({"type": "diagram", "en": "x", "zh": "graph TD; A-->B"})
                self.assertIn(f"../images/d-{h}.png", out)
                self.assertIn(("d", h), self.used)
                self.assertNotIn("<figure", out)
            finally:
                be.IMAGE_DIR = old

    def test_diagram_missing_cache_is_fatal(self):
        with tempfile.TemporaryDirectory() as td:
            old = be.IMAGE_DIR
            be.IMAGE_DIR = Path(td)
            try:
                with self.assertRaises(SystemExit):
                    self.rb({"type": "diagram", "en": "x", "zh": "graph TD; C-->D"})
            finally:
                be.IMAGE_DIR = old

    def test_deepdive_has_label_summary_body_cite(self):
        out = self.rb({
            "type": "deepdive",
            "summary": {"en": "s", "zh": "位置"},
            "en": "body-en", "zh": "正文",
            "cite": {"pdf_id": "80211-2024", "pages": [427, 430]},
        })
        for needle in ("深入标准", "位置", "正文", "80211-2024", "427"):
            self.assertIn(needle, out)

    def test_widget_links_to_online_lesson(self):
        out = self.rb({"type": "widget", "widget": "backoff", "params": {}})
        self.assertIn("learn/#/foundations/foundations-01", out)
        self.assertIn("交互演示", out)

    def test_unknown_type_skipped_with_warning(self):
        out = self.rb({"type": "mcs-snr"})
        self.assertEqual(out, "")
        self.assertTrue(any("unknown block type" in w for w in be.warnings))


class LessonXhtmlTests(unittest.TestCase):
    def test_lesson_is_wellformed_xml_with_cites(self):
        be.warnings.clear()
        lesson = {
            "id": "foundations-01", "track": "foundations",
            "title": {"en": "T", "zh": "标题"}, "estMinutes": 5,
            "blocks": [{"type": "prose", "en": "a", "zh": "甲"}],
            "cites": [{"pdf_id": "80211-2024", "pages": [1], "note": "n"}],
        }
        doc = be.lesson_xhtml(lesson, "foundations", "zh", set())
        root = ET.fromstring(doc)
        self.assertTrue(root.tag.endswith("html"))
        self.assertIn("参考文献", doc)
        self.assertIn("标题", doc)


if __name__ == "__main__":
    unittest.main()
