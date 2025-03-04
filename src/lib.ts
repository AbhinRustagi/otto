export function getHumanDate(date: string) {
  const [day, month, year] = date.split("-");
  return new Date(+year, +month - 1, +day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
