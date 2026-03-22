export { packageHalfDayNairobi } from "./half-day-nairobi";

export const nairobiPackages = [
  async () => (await import("./half-day-nairobi")).packageHalfDayNairobi,
];
