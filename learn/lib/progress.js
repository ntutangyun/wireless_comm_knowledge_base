const KEY = "learn_progress";
export class ProgressStore {
  constructor(storage) {
    this.storage = storage;
    this.state = { done: {}, last: null };
    try {
      const raw = storage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          this.state.done = parsed.done || {};
          this.state.last = parsed.last || null;
        }
      }
    } catch (e) { /* corrupt → empty */ }
  }
  _save() { try { this.storage.setItem(KEY, JSON.stringify(this.state)); } catch (e) {} }
  markComplete(id) { this.state.done[id] = true; this._save(); }
  isComplete(id) { return !!this.state.done[id]; }
  completedIn(ids) { return ids.filter(id => this.state.done[id]).length; }
  setLast(id) { this.state.last = id; this._save(); }
  getLast() { return this.state.last; }
}
