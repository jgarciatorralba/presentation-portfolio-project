import { JSX } from "react";
import { SectionProps } from "userInterface";

export default function Section({ children, name, className, ...props }: SectionProps): JSX.Element {
    return (
        <section id={name} className={className} {...props}>
            {children}
        </section>
    );
}
