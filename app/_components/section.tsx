import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    name: string;
    className?: string;
}

export default function Section({ children, name, className = "", ...props }: SectionProps): ReactNode {
    return (
        <section className={className} id={name} {...props}>
            {children}
        </section>
    );
}
