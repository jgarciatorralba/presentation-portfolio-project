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

        const navbarElementMobile = screen.getByRole("navigation");

        expect(navbarElementMobile).toBeInTheDocument();
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

    it("Contains all expected links in the navbar", () => {
        const { container } = render(<Header />);

        const navbarElementMobile: HTMLElement | null = container.querySelector("nav > div");
        const navbarElementDesktop: HTMLElement | null = container.querySelector("nav > div:nth-child(2)");

        [navbarElementMobile, navbarElementDesktop].forEach(navbarElement => {
            expect(navbarElement).not.toBeNull();

            if (navbarElement !== null) {
                const links = navbarElement.querySelectorAll("a");

                expect(links.length).toBe(5);
                expect(links[0]).toHaveTextContent("About");
                expect(links[1]).toHaveTextContent("Experience");
                expect(links[2]).toHaveTextContent("Projects");
                expect(links[3]).toHaveTextContent("Contact");
                expect(links[4]).toHaveTextContent("Resume");
            }
        });
    });

    it("Downloads the resume when the Resume link is clicked", () => {
        const { container } = render(<Header />);

        const resumeLink: HTMLElement | null = container.querySelector("a[href='/resume.pdf']");

        expect(resumeLink).not.toBeNull();

        if (resumeLink !== null) {
            expect(resumeLink).toHaveAttribute("target", "_blank");
            expect(resumeLink).toHaveAttribute("rel", "noopener noreferrer");
            expect(resumeLink).toHaveTextContent("Resume");

        }
    });

    it("Toggles the sidebar when NavbarButton is clicked", () => {
        const { container } = render(<Header />);

        const navbarButton: HTMLElement | null = container.querySelector("button.navButton");

        expect(navbarButton).not.toBeNull();

        if (navbarButton !== null) {
            // Click the button to open the sidebar
            act(() => {
                navbarButton.click();
            });

            const sidebarElement = container.querySelector(".containerSidebar");

            expect(sidebarElement).toHaveClass("open");

            // Click the button again to close the sidebar
            act(() => {
                navbarButton.click();
            });

            expect(sidebarElement).not.toHaveClass("open");
        }
    });
});
