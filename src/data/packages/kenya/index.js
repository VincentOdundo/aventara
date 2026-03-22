export { package3DayMara } from "./3day-mara";
export { package3DayAmboseli } from "./3day-amboseli";
export { package4DayMaraNakuru } from "./4day-mara-nakuru";
export { package5DayMaraNakuruNaivasha } from "./5day-mara-nakuru-naivasha";
export { package6DayMaraNakuruAmboseli } from "./6day-mara-nakuru-amboseli";
export { package7DayMaraNakuruNaivashaAmboseli } from "./7day-mara-nakuru-naivasha-amboseli";
export { package8DayMaraNakuruAmboseli } from "./8day-mara-nakuru-amboseli";

export const kenyaPackages = [
  async () => (await import("./3day-mara")).package3DayMara,
  async () => (await import("./3day-amboseli")).package3DayAmboseli,
  async () => (await import("./4day-mara-nakuru")).package4DayMaraNakuru,
  async () =>
    (await import("./5day-mara-nakuru-naivasha")).package5DayMaraNakuruNaivasha,
  async () =>
    (await import("./6day-mara-nakuru-amboseli")).package6DayMaraNakuruAmboseli,
  async () =>
    (await import("./7day-mara-nakuru-naivasha-amboseli"))
      .package7DayMaraNakuruNaivashaAmboseli,
  async () =>
    (await import("./8day-mara-nakuru-amboseli")).package8DayMaraNakuruAmboseli,
];
