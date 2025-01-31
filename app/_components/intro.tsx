import { ReactNode } from "react";

export default function Intro(): ReactNode {
    return (
        <section>
            <div className="h-screen flex items-center">
                <div className="sm:px-12 md:px-24 lg:px-32 xl:px-64 py-12">
                    <p className="mb-4">Hey there!</p>
                    <p className="text-3xl sm:text-5xl mb-4"><span className="text-midnightBlue">I'm Jorge,</span> a software engineer specializing in web applications.</p>
                    <p>Currently, I’m dedicated to enhancing one of the top travel booking platforms in Europe.</p>
                </div>
            </div>
        </section>
    );
}
