import { JSX, ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    name: string;
    className?: string;
}

export default function Section({ children, name, className = "", ...props }: SectionProps): JSX.Element {
    return (
        <section id={name} className={className} {...props}>
            {children}
        </section>
    );
}
