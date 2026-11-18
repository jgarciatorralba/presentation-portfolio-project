import About from "@sections/about";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("About section", () => {
    it("Renders the heading \"About\"", () => {
        render(<About />);

        const heading: HTMLElement = screen.getByRole("heading", { name: /About/ });

        expect(heading).toBeInTheDocument();
    });

    it("Shows the main image", () => {
        const { container } = render(<About />);

        const img: HTMLImageElement | null = container.querySelector('img[alt="Front Picture"]');

        expect(img).toBeInTheDocument();
    });

    it("Shows the social media links", () => {
        const { container } = render(<About />);

        const links: HTMLAnchorElement[] = screen.getAllByRole("link") as HTMLAnchorElement[];

        expect(links.length).toBe(2);
        links.forEach((link: HTMLAnchorElement) => {
            expect(link).toHaveAttribute("rel", "noopener noreferrer");
            expect(link).toHaveAttribute("target", "_blank");
        });

        expect(links[0]).toHaveAttribute("aria-label", "GitHub profile (opens in a new tab)");
        expect(links[1]).toHaveAttribute("aria-label", "LinkedIn profile (opens in a new tab)");

        const socialIcons: NodeListOf<HTMLImageElement> | null = container.querySelectorAll("a[aria-label] > img");

        expect(socialIcons.length).toBe(2);
    });
});
