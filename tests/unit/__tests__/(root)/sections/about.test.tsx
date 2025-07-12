import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../../../../../app/(root)/sections/about";

describe("About component", () => {
    it("Renders the heading \"About\"", () => {
        render(<About />);

        expect(screen.getByRole("heading", { name: /About/ })).toBeInTheDocument();
    });

    it("Shows the main image", () => {
        const { container } = render(<About />);
        const img = container.querySelector('img[alt="Front Picture"]');

        expect(img).toBeInTheDocument();
    });

    it("Shows the social media links", () => {
        render(<About />);
        const links = screen.getAllByRole("link");

        expect(links.length).toBe(2);
        links.forEach(link => {
            expect(link).toHaveAttribute("rel", "noopener noreferrer");
            expect(link).toHaveAttribute("target", "_blank");
        });

        const socialIcons = screen.getAllByRole('img', { name: /Logo/ });

        expect(socialIcons.length).toBe(2);
        expect(socialIcons[0]).toHaveAttribute("alt", "GitHub Logo");
        expect(socialIcons[1]).toHaveAttribute("alt", "LinkedIn Logo");
    });
});
