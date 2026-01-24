import { JSX } from "react";
import { ButtonProps } from "userInterface";

export default function Button(props: ButtonProps): JSX.Element {
    return (
        <button {...props} type={props.type ?? "button"} />
    );
}
