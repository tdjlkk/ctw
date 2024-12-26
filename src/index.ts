/**
 * **CTW** - Conditional Tailwind
 * @param {...(string | string[] | boolean | null | undefined)} args
 * @returns {string}
 */
function ctw(
  ...args: (string | string[] | boolean | null | undefined)[]
): string;
function ctw(): string {
  let r = "",
    i = 0,
    a: unknown,
    s: unknown;

  for (; i < arguments.length; ) {
    if (!(a = arguments[i++])) continue;

    if (typeof a === "string") {
      s = a.trim();
      s && (r += r ? " " + s : s);
    } else if (Array.isArray(a)) {
      for (s of a) {
        if (typeof s === "string") {
          s = s.trim();
          s && (r += r ? " " + s : s);
        }
      }
    }
  }

  return r;
}
export { ctw };
export default ctw;
