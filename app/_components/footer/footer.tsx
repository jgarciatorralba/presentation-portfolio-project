import { year } from "@lib/constants";
import { JSX } from "react";

export default function Footer(): JSX.Element {
    return (
        <footer>
            <div className="py-2 text-center">
                <p><small>{`© ${year} Jorge García Torralba`}</small></p>
            </div>
        </footer>
    );
}
