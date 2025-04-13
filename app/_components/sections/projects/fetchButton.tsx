'use client'

import { JSX, useState } from "react";
import Button from "../../button";

export default function FetchButton({ next }: { next: boolean }): JSX.Element {
    const [disabled, setDisabled] = useState(next === false);

    return (
        <Button
            htmlType="button"
            className={`btn cursor-pointer max-w-fit ${disabled && 'pointer-events-none opacity-50'}`}
            disabled={disabled}
            children={"Show more"}
            onClick={() => console.log("Fetching data")}
        />
    );
}
