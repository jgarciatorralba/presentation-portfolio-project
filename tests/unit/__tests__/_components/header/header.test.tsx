import Header from "@components/header/header";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { act } from "react";

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

    it("Contains all expected links to sections in the navbar", () => {
        const { container } = render(<Header />);

        const navbarElementMobile: HTMLElement | null = container.querySelector("nav > div");
        const navbarElementDesktop: HTMLElement | null = container.querySelector("nav > div:nth-child(2)");

        [navbarElementMobile, navbarElementDesktop].forEach(navbarElement => {
            expect(navbarElement).not.toBeNull();

            const links = navbarElement!.querySelectorAll("a");

            expect(links.length).toBe(5);
            expect(links[0]).toHaveTextContent("About");
            expect(links[1]).toHaveTextContent("Experience");
            expect(links[2]).toHaveTextContent("Projects");
            expect(links[3]).toHaveTextContent("Contact");
            expect(links[4]).toHaveTextContent("Resume");
        });
    });

    it("Includes a link to the resume", () => {
        const { container } = render(<Header />);

        const resumeLink: HTMLElement | null = container.querySelector("a[href='/resume.pdf']");

        expect(resumeLink).not.toBeNull();

        expect(resumeLink).toHaveAttribute("target", "_blank");
        expect(resumeLink).toHaveAttribute("rel", "noopener noreferrer");
        expect(resumeLink).toHaveTextContent("Resume");
    });

    it("Toggles the sidebar when NavbarButton is clicked", () => {
        const { container } = render(<Header />);

        const navbarButton: HTMLElement | null = container.querySelector("button.navButton");

        expect(navbarButton).not.toBeNull();

        const sidebarElement = container.querySelector(".containerSidebar");

        act(() => {
            navbarButton!.click();
        });

        expect(sidebarElement).toHaveClass("open");

        act(() => {
            navbarButton!.click();
        });

        expect(sidebarElement).not.toHaveClass("open");
    });

    it("Closes the sidebar when a sidebar link is clicked", () => {
        const { container } = render(<Header />);

        const navbarButton: HTMLElement | null = container.querySelector("button.navButton");

        expect(navbarButton).not.toBeNull();

        act(() => {
            navbarButton!.click();
        });

        const sidebarElement = container.querySelector(".containerSidebar");
        const sidebarLinks = sidebarElement?.querySelectorAll("ol a");
        const firstLink = sidebarLinks![0];

        expect(sidebarElement).toHaveClass("open");
        expect(sidebarLinks && sidebarLinks.length > 0).toBe(true);
        expect(firstLink).toBeInTheDocument();

        act(() => {
            (firstLink as HTMLElement).click();
        });

        expect(sidebarElement).not.toHaveClass("open");
    });
});
