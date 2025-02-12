import { JSX, MouseEvent, ReactNode } from "react";

interface ButtonProps {
    htmlType: "button" | "submit" | "reset";
    children: ReactNode;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

export default function Button({ htmlType, children, onClick, className = "", ...props }: ButtonProps): JSX.Element {
    return (
        <button type={htmlType} onClick={onClick} className={className} {...props}>
            {children}
        </button>
    );
}
