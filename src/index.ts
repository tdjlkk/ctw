/**
 * **CTW** - Conditional Tailwind
 * @param {...(string | number | (string | number | false)[] | false | null | undefined)} args
 * @returns {string}
 */
function ctw(
  ...args: (string | number | (string | number | false)[] | false | null | undefined)[]
): string;
function ctw(): string {
  let r = "",
    i = 0,
    a: unknown,
    s: unknown;

  for (; i < arguments.length; ) {
    if (!(a = arguments[i++])) continue;

    if (typeof a === "string" || typeof a === "number") {
      s = String(a).trim();
      s && (r += r ? " " + s : s);
    } else if (Array.isArray(a)) {
      if (a.length > 0) {
        const result = ctw(...a);
        result && (r += r ? " " + result : result);
      }
    } else if (typeof a === "boolean" && a) {
      const next = arguments[i];
      if (next) {
        const result = ctw(next);
        result && (r += r ? " " + result : result);
        i++;
      }
    }
  }

  return r;
}
export { ctw };
export default ctw;
