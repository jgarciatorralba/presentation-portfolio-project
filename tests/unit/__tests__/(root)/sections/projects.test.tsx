import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Project } from "projects";
import Projects from "../../../../../app/(root)/sections/projects";
import { fetchProjects } from "../../../../../app/_lib/api/fetchProjects";

jest.mock("../../../../../app/_lib/api/fetchProjects", () => ({
    fetchProjects: jest.fn(),
}));

describe("Projects section", () => {
    const sampleProject: Project = {
        id: 12345678,
        name: "Test Project",
        description: "This is a test project",
        topics: ["test", "project"],
        repository: "https://github.com/user/test-project",
        homepage: "https://example.com/test-project",
        archived: false,
        lastPushedAt: new Date(),
    };

    beforeEach(() => {
        (fetchProjects as jest.Mock).mockResolvedValue({
            projects: [sampleProject],
            next: true,
            error: null,
        });
    });

    it("Returns null when no projects are fetched", async () => {
        (fetchProjects as jest.Mock).mockResolvedValue({
            projects: [],
            next: false,
            error: null,
        });

        const result = await Projects();

        expect(result).toBeNull();
    });

    it("Renders the heading \"Projects\"", async () => {
        const result = await Projects();
        render(<>{result}</>);

        const heading: HTMLElement = screen.getByRole("heading", { name: /Projects/ });

        expect(heading).toBeInTheDocument();
    });

    it("Renders project paragraphs", async () => {
        const result = await Projects();
        render(<>{result}</>);

        const paragraphs: HTMLParagraphElement[] = screen.getAllByRole("paragraph") as HTMLParagraphElement[];

        expect(paragraphs.length).toBeGreaterThan(0);
        paragraphs.forEach((paragraph: HTMLParagraphElement) => {
            expect(paragraph).toBeInTheDocument();
        });
    });
});
