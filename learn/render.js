import { pick } from "./lib/i18n.js";

export function blockKind(block) {
  return (block && block.type) ? block.type : "unknown";
}

function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
}

export function renderBlocks(blocks, lang, ctx) {
  const frag = document.createDocumentFragment();
  for (const block of (blocks || [])) {
    const kind = blockKind(block);
    let node;
    switch (kind) {
      case "prose":
        node = el("p", "block prose", pick(block, lang));
        break;
      case "callout":
        node = el("div", "block callout " + (block.variant || ""), pick(block, lang));
        break;
      case "figure": {
        node = el("figure", "block figure");
        node.innerHTML = block.svg || "";              // authored, trusted SVG
        if (block.caption) node.appendChild(el("figcaption", null, pick(block.caption, lang)));
        break;
      }
      case "diagram": {
        node = el("div", "block diagram");
        const code = pick(block, lang) || block.mermaid || "";
        renderMermaid(node, code);
        break;
      }
      case "deepdive": {
        node = el("details", "block deepdive");
        node.appendChild(el("summary", null, pick(block.summary, lang) || "Go deeper"));
        node.appendChild(el("div", null, pick(block, lang)));
        if (block.cite) {
          const c = block.cite;
          node.appendChild(el("div", "cite", `${c.pdf_id} p.${(c.pages || []).join(", ")}`));
        }
        break;
      }
      case "widget": {
        node = el("div", "block widget");
        ctx.mountWidget(node, block);                   // delegated to learn.js/registry
        break;
      }
      default:
        node = el("div", "block unknown");              // skip gracefully
        node.dataset.kind = kind;
    }
    frag.appendChild(node);
  }
  return frag;
}

async function renderMermaid(host, code) {
  try {
    const mermaid = await window.mermaidReady;
    if (!mermaid || !code) return;
    const id = "m" + Math.abs(hashStr(code));
    const { svg } = await mermaid.render(id, code);
    host.innerHTML = svg;
  } catch (e) { host.textContent = ""; }
}
function hashStr(s) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return h; }
