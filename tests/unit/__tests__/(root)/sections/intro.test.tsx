import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Intro from "../../../../../app/(root)/sections/intro";

describe("Intro section", () => {
    it("Renders the main heading", () => {
        render(<Intro />);

        const heading: HTMLElement = screen.getByRole("heading", { level: 1 });

        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent("Hey there!");
    });

    it("Renders the subheading with highlighted text", () => {
        render(<Intro />);

        const subheading: HTMLElement = screen.getByRole("heading", { level: 2 });
        const span: HTMLElement | null = subheading.querySelector("span.text-midnight-blue");

        expect(subheading).toBeInTheDocument();
        expect(subheading).toHaveTextContent("a software engineer");

        expect(span).toBeInTheDocument();
        expect(span).toHaveTextContent("I'm Jorge,");
    });

    it("Renders the introduction paragraph", () => {
        render(<Intro />);

        const paragraph: HTMLElement = screen.getByRole("paragraph");

        expect(paragraph).toBeInTheDocument();
    });
});
