import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../../../../../app/(root)/sections/contact";

describe("Contact", () => {
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
        render(<Contact />);

        const emailButton = screen.getByRole("button", { name: /Say something/ });

        expect(emailButton).toHaveAttribute("href", expect.stringContaining("mailto:"));
        expect(emailButton).toHaveAttribute("target", "_blank");
        expect(emailButton).toHaveAttribute("rel", "noopener noreferrer");
    });
});
