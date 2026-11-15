import { JSX } from "react";
import type { ButtonProps } from "@lib/types/userInterface";

export default function Button(props: ButtonProps): JSX.Element {
    return (
        <button {...props} type={props.type ?? "button"} />
    );
}
