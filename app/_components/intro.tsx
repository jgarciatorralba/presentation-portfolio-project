import { JSX } from "react";
import { oranienbaum } from "../(root)/fonts";
import Section from "./section";

export default function Intro(): JSX.Element {
    return (
        <Section name="intro">
            <div className="h-screen flex items-center">
                <div className="sm:px-12 md:px-24 lg:px-32 xl:px-64 py-12">
                    <h1 className={`${oranienbaum.className} mb-4 text-2xl`}>Hey there!</h1>
                    <h2 className="text-3xl sm:text-5xl mb-4"><span className="text-midnightBlue">I'm Jorge,</span> a software engineer specializing in web applications.</h2>
                    <p className="paragraph">Currently, I’m dedicated to enhancing one of the top travel booking platforms in Europe.</p>
                </div>
            </div>
        </Section>
    );
}
