import { JSX } from "react";
import { ButtonProps } from "userInterface";

export default function Button({ htmlType, children, onClick, className = "", ...props }: ButtonProps): JSX.Element {
    return (
        <button type={htmlType} onClick={onClick} className={className} {...props}>
            {children}
        </button>
    );
}
