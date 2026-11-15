import { formatResumeDate } from "@lib/formatters/formatResumeDate";

describe("formatResumeDate", () => {
    it("formats a year and month with the full English month", () => {
        expect(formatResumeDate("2022-02")).toBe("February 2022");
    });

    it("keeps year-only dates unchanged", () => {
        expect(formatResumeDate("2022")).toBe("2022");
    });

    it("uses Present when no date is provided", () => {
        expect(formatResumeDate()).toBe("Present");
    });
});
