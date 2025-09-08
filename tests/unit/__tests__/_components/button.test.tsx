import Button from "@components/button";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Button component", () => {
    it("Renders correctly", () => {
        render(<Button htmlType="button" className="test-button" onClick={() => { }}>Click me</Button>);

        const button = screen.getByRole("button", { name: /Click me/i });

        expect(button).toBeInTheDocument();
        expect(button).toHaveClass("test-button");
        expect(button).toHaveAttribute("type", "button");
    });

    it("Renders with additional props (e.g. disabled)", () => {
        render(
            <Button htmlType="button" className="test-button" onClick={() => { }} disabled>
                Disabled Button
            </Button>
        );

        const button = screen.getByRole("button", { name: /Disabled Button/i });

        expect(button).toBeDisabled();
    });

    it("Renders with default className when not provided", () => {
        render(
            <Button htmlType="button" onClick={() => { }}>
                No class
            </Button>
        );

        const button = screen.getByRole("button", { name: /No class/i });

        expect(button.className).toBe("");
    });

    it("Handles click action", () => {
        const handleClick = jest.fn();

        render(<Button htmlType="button" className="test-button" onClick={handleClick}>Click me</Button>);

        const button = screen.getByRole("button", { name: /Click me/i });

        button.click();

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
