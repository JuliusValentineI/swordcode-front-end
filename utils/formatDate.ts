export default function formatDate(dateString: string) {
    const date = new Date(dateString);

    const day = date.getDate();
    const monthIndex = date.getMonth();

    const monthNames = [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "oct",
      "dic",
    ];
    const month = monthNames[monthIndex];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}
