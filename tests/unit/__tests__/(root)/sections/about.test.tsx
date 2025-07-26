import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../../../../../app/(root)/sections/about";

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
        render(<About />);

        const links: HTMLAnchorElement[] = screen.getAllByRole("link") as HTMLAnchorElement[];

        expect(links.length).toBe(2);
        links.forEach((link: HTMLAnchorElement) => {
            expect(link).toHaveAttribute("rel", "noopener noreferrer");
            expect(link).toHaveAttribute("target", "_blank");
        });

        const socialIcons: HTMLImageElement[] = screen.getAllByRole('img', { name: /Logo/ }) as HTMLImageElement[];

        expect(socialIcons.length).toBe(2);
        expect(socialIcons[0]).toHaveAttribute("alt", "GitHub Logo");
        expect(socialIcons[1]).toHaveAttribute("alt", "LinkedIn Logo");
    });
});
