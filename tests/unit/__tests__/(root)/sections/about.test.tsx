import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../../../../../app/(root)/sections/about";

describe("About component", () => {
    it("Renders the heading About", () => {
        render(<About />);
        expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();
    });

    it("Shows the main image", () => {
        const { container } = render(<About />);
        const img = container.querySelector('img[alt="Front Picture"]');
        expect(img).toBeInTheDocument();
    });

    it("Shows the social media links", () => {
        render(<About />);
        const links = screen.getAllByRole("link");
        expect(links.length).toBeGreaterThan(0);
    });
});
