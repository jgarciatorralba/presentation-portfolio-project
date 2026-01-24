import { JSX } from "react";
import { SectionProps } from "userInterface";

export default function Section(props: SectionProps): JSX.Element {
    return (
        <section {...props}>{props.children}</section>
    );
}
