export type Theme = "light" | "dark";
export function readTheme(): Theme {
  try {
    const saved = localStorage.getItem("powerlab.theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* Storage can be unavailable in private browsers. */
  }
  return "light";
}
export function saveTheme(theme: Theme): void {
  try {
    localStorage.setItem("powerlab.theme", theme);
  } catch {
    /* Theme still works for this session. */
  }
}
