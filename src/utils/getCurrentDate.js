export function getCurrentDate() {
  // Create a new Date object
  const currentDate = new Date();

  // Get day, month, date, and year

  const day = currentDate.toLocaleString("en-US", { weekday: "long" });
  const month = currentDate.toLocaleString("en-US", { month: "long" });
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();

  // Construct the result string
  return ` ${day},  ${month}  ${date}, ${year}`;

  // Return the result
}
