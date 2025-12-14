const getFormattedDate = (isoDate) => {
  const date = new Date(isoDate);
  const formatted = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
  return formatted;
};
export default getFormattedDate;
