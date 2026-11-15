export function formatResumeDate(date?: string): string {
    if (!date) {
        return "Present";
    }

    const [year, month] = date.split("-");
    if (!month) {
        return year;
    }

    const monthNumber = Number(month);
    if (!Number.isInteger(monthNumber) || monthNumber < 1 || monthNumber > 12) {
        return `${month}/${year}`;
    }

    const monthName = new Intl.DateTimeFormat("en-US", {
        month: "long",
        timeZone: "UTC",
    }).format(new Date(Date.UTC(Number(year), monthNumber - 1, 1)));

    return `${monthName} ${year}`;
}
