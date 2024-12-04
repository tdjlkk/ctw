/**
 * **Conditional Tailwind** - Create Tailwind Styles Conditionally
 * @param {...(string | string[] | boolean | null | undefined)} args - Arguments to conditionally create Tailwind CSS classes.
 * @returns {string} - A combined string of Tailwind CSS classes.
 */
function ctw(
  ...args: (string | string[] | boolean | null | undefined)[]
): string;
function ctw(): string {
  let r = "",
    i = 0,
    a: unknown;
  for (; i < arguments.length; ) {
    if ((a = arguments[i++])) {
      if (typeof a === "string") {
        r && (r += " ");
        r += a;
      } else if (Array.isArray(a)) {
        for (const str of a) {
          if (typeof str === "string") {
            r && (r += " ");
            r += str;
          }
        }
      }
    }
  }
  return r;
}
export { ctw };
