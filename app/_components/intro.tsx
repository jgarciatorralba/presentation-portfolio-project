import { ReactNode } from "react";

export default function Intro(): ReactNode {
    return (
        <section>
            <div className="p-12 lg:px-24 xl:px-32 2xl:px-64 lg:py-12 xl:py-16 2xl:py-32">
                <p>Hey there!</p>
                <p>I'm Jorge, a software engineer specializing in web applications.<br />Currently, I’m dedicated to enhancing one of the top travel booking platforms in Europe.</p>
            </div>
        </section>
    );
}
