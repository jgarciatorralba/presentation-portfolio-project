import { oranienbaum } from "@lib/fonts";
import type { JSX } from "react";

export default function SectionHeading({ id, children }: { id: string; children: string }): JSX.Element {
    return (
        <h2 id={id} className={`header ${oranienbaum.className}`}>
            {children}
        </h2>
    );
}
