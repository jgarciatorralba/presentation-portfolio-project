import { sampleProject } from "@/tests/unit/__mocks__/sampleProject";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import fs from "fs";
import { JSX } from "react";
import Projects from "../../../../../app/(root)/sections/projects";
import { fetchProjects } from "../../../../../app/_lib/api/fetchProjects";
import { logFilePath } from "../../../../../app/_lib/constants";

jest.mock("../../../../../app/_lib/api/fetchProjects", () => ({
    fetchProjects: jest.fn(),
}));

describe("Projects section", () => {
    const assertLogHasBeenWritten = (message: string): void => {
        if (!fs.existsSync(logFilePath)) {
            throw new Error("Invalid log file path. Please make sure the log file exists.");
        }

        const fileContents: string = fs.readFileSync(logFilePath, "utf-8");
        const lines: string[] = fileContents.split("\n").filter(line => line.trim() !== "");

        expect(fileContents.trim().length).toBeGreaterThan(0);
        expect(lines.length).toBe(1);
        expect(lines[0]).toContain(message);
    };

    const clearLogFile = (): void => {
        if (fs.existsSync(logFilePath)) {
            fs.writeFileSync(logFilePath, "");
        }
    };

    beforeEach(() => {
        (fetchProjects as jest.Mock).mockResolvedValue({
            projects: [sampleProject],
            next: true,
            error: null,
        });

        clearLogFile();
    });

    afterEach(() => {
        clearLogFile();
    });

    it("Returns null when no projects are fetched", async () => {
        (fetchProjects as jest.Mock).mockResolvedValue({
            projects: [],
            next: false,
            error: null,
        });

        const result: JSX.Element | null = await Projects();

        expect(result).toBeNull();

        assertLogHasBeenWritten("Fetched projects from API successfully.");
    });

    it("Returns null when an error occurs", async () => {
        const errorMessage = "Failed to fetch projects";

        (fetchProjects as jest.Mock).mockResolvedValue({
            projects: [],
            next: false,
            error: new Error(errorMessage),
        });

        const result: JSX.Element | null = await Projects();

        expect(result).toBeNull();

        assertLogHasBeenWritten(`Error fetching from API: ${errorMessage}`);
    });

    it("Renders the heading \"Projects\"", async () => {
        const result: JSX.Element | null = await Projects();

        expect(result).not.toBeNull();

        render(result);

        const heading: HTMLElement = screen.getByRole("heading", { name: /Projects/ });

        expect(heading).toBeInTheDocument();

        assertLogHasBeenWritten("Fetched projects from API successfully.");
    });

    it("Renders project paragraphs", async () => {
        const result: JSX.Element | null = await Projects();

        expect(result).not.toBeNull();

        render(result);

        const paragraphs: HTMLParagraphElement[] = screen.getAllByRole("paragraph") as HTMLParagraphElement[];

        expect(paragraphs.length).toBeGreaterThan(0);
        paragraphs.forEach((paragraph: HTMLParagraphElement) => {
            expect(paragraph).toBeInTheDocument();
        });

        assertLogHasBeenWritten("Fetched projects from API successfully.");
    });
});
