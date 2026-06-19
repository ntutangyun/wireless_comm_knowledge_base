#!/usr/bin/env python3
"""Validate Learn Wi-Fi lessons + curriculum. Stdlib-only. Exit 0 = pass, 1 = fail."""
import json
import os
import sys

BANNED = ["patent", "trade secret", "patent pipeline", "patent candidate", "patent surface", "unstaked"]
TEXT_BLOCKS = {"prose", "callout"}


def load_pdf_ids(path):
    with open(path, encoding="utf-8") as f:
        return set(json.load(f))


def _has_both(obj):
    return isinstance(obj, dict) and obj.get("en") and obj.get("zh")


def _scan_banned(text, where, errs):
    low = text.lower()
    for term in BANNED:
        if term in low:
            errs.append(f"banned term '{term}' in {where}")


def check_lesson(lesson, valid_pdf_ids):
    errs = []
    lid = lesson.get("id", "?")
    if not _has_both(lesson.get("title")):
        errs.append(f"{lid}: title missing en/zh")
    for i, block in enumerate(lesson.get("blocks", [])):
        btype = block.get("type")
        where = f"{lid} block#{i} ({btype})"
        # text parity
        if btype in TEXT_BLOCKS or btype == "deepdive":
            if not (block.get("en") and block.get("zh")):
                errs.append(f"{where}: missing en/zh text")
        for sub in ("summary", "caption"):
            if sub in block and not _has_both(block[sub]):
                errs.append(f"{where}: {sub} missing en/zh")
        # widget id
        if btype == "widget" and not isinstance(block.get("widget"), str):
            errs.append(f"{where}: widget block needs a string 'widget' id")
        # cite pdf_id
        cite = block.get("cite")
        if cite:
            if cite.get("pdf_id") not in valid_pdf_ids:
                errs.append(f"{where}: cite pdf_id '{cite.get('pdf_id')}' not in allowlist")
        # banned terms across any string field
        for k, v in block.items():
            if isinstance(v, str):
                _scan_banned(v, where + f".{k}", errs)
            elif isinstance(v, dict):
                for kk, vv in v.items():
                    if isinstance(vv, str):
                        _scan_banned(vv, where + f".{k}.{kk}", errs)
    return errs


def check_curriculum(curriculum, lesson_ids_on_disk):
    errs = []
    seen = set()
    for track in curriculum.get("tracks", []):
        for les in track.get("lessons", []):
            lid = les.get("id")
            if lid in seen:
                errs.append(f"duplicate lesson id '{lid}'")
            seen.add(lid)
            if lid not in lesson_ids_on_disk:
                errs.append(f"curriculum lesson '{lid}' has no file in lessons/")
    return errs


def main(learn_dir):
    valid = load_pdf_ids(os.path.join(learn_dir, "corpus_pdf_ids.json"))
    lessons_dir = os.path.join(learn_dir, "lessons")
    ids_on_disk = set()
    all_errs = []
    for fn in sorted(os.listdir(lessons_dir)):
        if not fn.endswith(".json"):
            continue
        ids_on_disk.add(fn[:-5])
        with open(os.path.join(lessons_dir, fn), encoding="utf-8") as f:
            try:
                lesson = json.load(f)
            except json.JSONDecodeError as e:
                all_errs.append(f"{fn}: invalid JSON ({e})")
                continue
        all_errs += check_lesson(lesson, valid)
    with open(os.path.join(learn_dir, "curriculum.json"), encoding="utf-8") as f:
        curriculum = json.load(f)
    all_errs += check_curriculum(curriculum, ids_on_disk)
    if all_errs:
        print("VALIDATION FAILED:")
        for e in all_errs:
            print("  -", e)
        return 1
    print(f"OK: {len(ids_on_disk)} lessons valid.")
    return 0


if __name__ == "__main__":
    here = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    sys.exit(main(here))
