import { JSX } from "react";
import type { SectionProps } from "@lib/types/userInterface";

export default function Section(props: SectionProps): JSX.Element {
    return (
        <section {...props}>{props.children}</section>
    );
}
