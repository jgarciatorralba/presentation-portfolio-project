import { JSX } from "react";
import { ButtonProps } from "userInterface";

export default function Button(props: ButtonProps): JSX.Element {
    return (
        <button type={props.type ?? "button"} {...props} />
    );
}
