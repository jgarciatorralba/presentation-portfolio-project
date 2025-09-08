import Projects from "@components/sections/projects/projects";
import ToastProvider from "@components/toast/toastProvider";
import { fetchProjects } from "@lib/api/fetchProjects";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { sampleProject } from "@tests/sampleProject";
import { act } from "react";

jest.mock("../../../../../../app/_lib/api/fetchProjects", () => ({
    fetchProjects: jest.fn(),
}));

describe("Projects component", () => {
    it("Renders prefetched projects correctly", () => {
        const { container } = render(<Projects next={true} prefetchedProjects={[sampleProject]} />);

        const projectName: HTMLElement = screen.getByText(sampleProject.name);
        const gitHubImage: HTMLElement = screen.getByAltText("GitHub Logo");
        const linkToRepository: HTMLElement | null = container.querySelector(`a[href="${sampleProject.repository}"]`);

        expect(projectName).toBeInTheDocument();
        expect(gitHubImage).toBeInTheDocument();
        expect(linkToRepository).toBeInTheDocument();
    });

    it("Fetches more projects when button is clicked", async () => {
        (fetchProjects as jest.Mock).mockResolvedValue({
            projects: [sampleProject],
            next: true,
            error: null,
        });

        const { container } = render(<Projects next={true} prefetchedProjects={[]} />);

        const button = screen.getByRole("button", { name: /Show more/i });

        act(() => {
            button.click();
        });

        expect(fetchProjects).toHaveBeenCalled();

        const projectName: HTMLElement = await screen.findByText(sampleProject.name);
        const gitHubImage: HTMLElement = await screen.findByAltText("GitHub Logo");
        const linkToRepository: HTMLElement | null = container.querySelector(`a[href="${sampleProject.repository}"]`);

        expect(button).not.toBeDisabled();
        expect(projectName).toBeInTheDocument();
        expect(gitHubImage).toBeInTheDocument();
        expect(linkToRepository).toBeInTheDocument();
    });

    it("Disables the button when no more projects are available", () => {
        (fetchProjects as jest.Mock).mockResolvedValue({
            projects: [],
            next: false,
            error: null,
        });

        render(<Projects next={false} prefetchedProjects={[sampleProject]} />);

        const button = screen.getByRole("button", { name: /Show more/i });

        expect(button).toBeDisabled();
    });

    it("Displays a toast message on fetch error", async () => {
        const errorMessage = "Failed to fetch projects";

        (fetchProjects as jest.Mock).mockResolvedValue({
            projects: [],
            next: false,
            error: new Error(errorMessage),
        });

        render(
            <ToastProvider>
                <Projects next={true} prefetchedProjects={[sampleProject]} />
            </ToastProvider>
        );

        const button = screen.getByRole("button", { name: /Show more/i });

        act(() => {
            button.click();
        });

        expect(fetchProjects).toHaveBeenCalled();

        const warningIcon: HTMLElement = await screen.findByAltText("Warning Icon");
        const errorToast: HTMLElement = await screen.findByText(errorMessage);

        expect(button).not.toBeDisabled();
        expect(warningIcon).toBeInTheDocument();
        expect(errorToast).toBeInTheDocument();
    });

    it("Hides the toast automatically after 3 seconds", async () => {
        jest.useFakeTimers();

        const errorMessage = "Failed to fetch projects";

        (fetchProjects as jest.Mock).mockResolvedValue({
            projects: [],
            next: false,
            error: new Error(errorMessage),
        });

        render(
            <ToastProvider>
                <Projects next={true} prefetchedProjects={[sampleProject]} />
            </ToastProvider>
        );

        const button = screen.getByRole("button", { name: /Show more/i });

        act(() => {
            button.click();
        });

        expect(fetchProjects).toHaveBeenCalled();

        const warningIcon: HTMLElement = await screen.findByAltText("Warning Icon");
        const errorToast: HTMLElement = await screen.findByText(errorMessage);

        expect(warningIcon).toBeInTheDocument();
        expect(errorToast).toBeInTheDocument();

        act(() => {
            jest.advanceTimersByTime(3000);
        });

        expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
        expect(screen.queryByAltText("Warning Icon")).not.toBeInTheDocument();

        jest.useRealTimers();
    });
});
