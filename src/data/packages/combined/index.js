export { package11DayKenyaTanzania } from "./11day-kenya-tanzania";
export { package12DayKenyaTanzania } from "./12day-kenya-tanzania";
export { package12DayKenyaTanzaniaSerengeti } from "./12day-kenya-tanzania-serengeti";

export const combinedPackages = [
  async () =>
    (await import("./11day-kenya-tanzania")).package11DayKenyaTanzania,
  async () =>
    (await import("./12day-kenya-tanzania")).package12DayKenyaTanzania,
  async () =>
    (await import("./12day-kenya-tanzania-serengeti"))
      .package12DayKenyaTanzaniaSerengeti,
];
