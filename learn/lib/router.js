export function parseHash(hash) {
  const raw = String(hash || "").replace(/^#\/?/, "");
  const parts = raw.split("/").filter(Boolean);
  return { trackId: parts[0] || null, lessonId: parts[1] || null };
}
export function buildHash(trackId, lessonId) {
  if (!trackId) return "#/";
  if (!lessonId) return "#/" + trackId;
  return "#/" + trackId + "/" + lessonId;
}
