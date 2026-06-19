export function pick(block, lang) {
  if (!block) return "";
  return block[lang] || block.en || "";
}
