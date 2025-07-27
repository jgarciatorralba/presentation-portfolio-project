import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { act } from "react";
import Experience from "../../../../../app/(root)/sections/experience";

describe("Experience section", () => {
    it("Renders the heading \"Experience\"", () => {
        render(<Experience />);

        const heading: HTMLElement = screen.getByRole("heading", { name: /Experience/ });

        expect(heading).toBeInTheDocument();
    });

    it("Displays the experience paragraphs", () => {
        render(<Experience />);

        const paragraphs: HTMLParagraphElement[] = screen.getAllByRole("paragraph") as HTMLParagraphElement[];

        expect(paragraphs.length).toBeGreaterThan(0);
        paragraphs.forEach((paragraph: HTMLParagraphElement) => {
            expect(paragraph).toBeInTheDocument();
        });
    });

    it("Contains tabs for different experiences", () => {
        render(<Experience />);

        const tabs: HTMLElement = screen.getByRole("tablist");

        expect(tabs).toBeInTheDocument();
        expect(tabs.children.length).toBeGreaterThan(0);
    });

    it("Displays the first experience tab as active", () => {
        render(<Experience />);

        const activeTab: HTMLElement = screen.getByRole("tab", { selected: true });

        expect(activeTab).toBeInTheDocument();
        expect(activeTab).toHaveTextContent("eDreams");
    });

    it("Renders the content of the first experience tab", () => {
        const { container } = render(<Experience />);

        const tabContents: HTMLElement[] = screen.getAllByRole("tabpanel") as HTMLElement[];
        const activeTabContent: HTMLElement = container.querySelector('div[role="tabpanel"].active') as HTMLElement;

        expect(tabContents.length).toBe(5);
        expect(activeTabContent).toBeInTheDocument();
        expect(activeTabContent).toHaveTextContent("Software Developer @ eDreams ODIGEO");
    });

    it("Switches to another experience tab when clicked", () => {
        const { container } = render(<Experience />);

        const hiddenTab: HTMLElement = screen.getByRole("tab", { name: "Òmada" });

        act(() => {
            hiddenTab.click();
        });

        const activeTabContent: HTMLElement = container.querySelector('div[role="tabpanel"].active') as HTMLElement;

        expect(hiddenTab).toBeInTheDocument();
        expect(activeTabContent).toHaveTextContent("Junior Backend Developer @ Òmada");
    });
});
