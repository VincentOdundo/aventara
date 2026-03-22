export { package3DayTanzania } from "./3day-serengeti-ngorongoro";
export { package4DayTanzania } from "./4day-tanzania";
export { package5DayTanzania } from "./5day-tanzania";
export { package6DayTanzania } from "./6day-tanzania";

export const tanzaniaPackages = [
  async () => (await import("./3day-serengeti-ngorongoro")).package3DayTanzania,
  async () => (await import("./4day-tanzania")).package4DayTanzania,
  async () => (await import("./5day-tanzania")).package5DayTanzania,
  async () => (await import("./6day-tanzania")).package6DayTanzania,
];
