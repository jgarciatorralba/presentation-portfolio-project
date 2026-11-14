import { formatResumeDate } from "@lib/formatters/formatResumeDate";
import type { JSX } from "react";

type DateRangeProps = {
    startDate?: string;
    endDate?: string;
};

export default function DateRange({ startDate, endDate }: DateRangeProps): JSX.Element {
    return (
        <p className="text-sm text-primary">
            {formatResumeDate(startDate)} - {formatResumeDate(endDate)}
        </p>
    );
}
