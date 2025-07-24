import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { act } from "react";
import Header from "../../../../../app/_components/header/header";

describe("Header component", () => {
    it("Renders the header with navbar", () => {
        const { container } = render(<Header />);

        const headerElement: HTMLElement | null = container.querySelector("header");
        expect(headerElement).not.toBeNull();
        expect(headerElement).toBeInTheDocument();

        const navbarElement = screen.getByRole("navigation");
        expect(navbarElement).toBeInTheDocument();
    });

    it("Applies \"scrolled\" class when window is scrolled", () => {
        const { container } = render(<Header />);

        // Simulate scroll
        act(() => {
            window.scrollY = 100;
            window.dispatchEvent(new Event('scroll'));
        });

        const headerElement: HTMLElement | null = container.querySelector("header > div");

        expect(headerElement).not.toBeNull();
        expect(headerElement).toHaveClass("scrolled");
    });

    it("Removes \"scrolled\" class when window is not scrolled", () => {
        const { container } = render(<Header />);

        // Simulate scroll back to top
        act(() => {
            window.scrollY = 0;
            window.dispatchEvent(new Event('scroll'));
        });

        const headerElement: HTMLElement | null = container.querySelector("header > div");

        expect(headerElement).not.toBeNull();
        expect(headerElement).not.toHaveClass("scrolled");
    });
});
