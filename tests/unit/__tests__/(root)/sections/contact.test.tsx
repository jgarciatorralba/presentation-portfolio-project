import Contact from "@sections/contact";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Contact section", () => {
    it("Renders the heading \"Contact\"", () => {
        render(<Contact />);

        const heading: HTMLElement = screen.getByRole("heading", { name: /Contact/ });

        expect(heading).toBeInTheDocument();
    });

    it("Renders contact paragraphs", () => {
        render(<Contact />);

        const paragraphs = screen.getAllByRole("paragraph");

        expect(paragraphs.length).toBe(1);
    });

    it("Renders the email button", () => {
        const { container } = render(<Contact />);

        const emailButton: HTMLElement | null = container.querySelector('.btn');

        expect(emailButton).toHaveAttribute("href", expect.stringContaining("mailto:"));
        expect(emailButton).toHaveAttribute("target", "_blank");
        expect(emailButton).toHaveAttribute("rel", "noopener noreferrer");
    });
});
