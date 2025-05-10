import { JSX } from "react";
import { referredUrl, year } from "../../_lib/constants";

export default function Footer(): JSX.Element {
    return (
        <footer>
            <div className="py-2 text-center">
                <p><small>{`© ${year} Jorge García Torralba`}</small></p>
                <p><small>
                    Inspired by the work of{" "}
                    <a
                        href={referredUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold"
                    >
                        Brittany Chiang
                    </a>
                </small></p>
            </div>
        </footer>
    );
}
