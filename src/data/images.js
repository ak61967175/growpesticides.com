import sizes from "./imageSizes.json";
// Width/height for an image path (stops layout shift while images load — good for Core Web Vitals).
export function imageSize(src) {
  const s = sizes[src];
  return s ? { width: s[0], height: s[1] } : {};
}
