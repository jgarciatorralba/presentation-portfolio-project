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
        const animatedCards: NodeListOf<Element> = container.querySelectorAll(".fadeIn");

        expect(projectName).toBeInTheDocument();
        expect(gitHubImage).toBeInTheDocument();
        expect(linkToRepository).toBeInTheDocument();
        expect(animatedCards).toHaveLength(0);
    });

    it("Fetches more projects when button is clicked", async () => {
        const secondProject = {
            ...sampleProject,
            id: sampleProject.id + 1,
            name: `${sampleProject.name}-two`,
        };
        const thirdProject = {
            ...sampleProject,
            id: sampleProject.id + 2,
            name: `${sampleProject.name}-three`,
        };

        (fetchProjects as jest.Mock).mockResolvedValue({
            projects: [secondProject, thirdProject],
            next: true,
            error: null,
        });

        const { container } = render(<Projects next={true} prefetchedProjects={[sampleProject]} />);

        const button = screen.getByRole("button", { name: /Show more/i });

        act(() => {
            button.click();
        });

        expect(fetchProjects).toHaveBeenCalled();

        const projectName: HTMLElement = await screen.findByText(secondProject.name.replaceAll("-", " "));
        const gitHubImage: HTMLElement = await screen.findAllByAltText("GitHub Logo").then((images) => images[1]);
        const linkToRepository: HTMLElement | null = container.querySelector(`a[href="${secondProject.repository}"]`);
        const animatedCards: NodeListOf<Element> = container.querySelectorAll(".fadeIn");

        expect(button).not.toBeDisabled();
        expect(projectName).toBeInTheDocument();
        expect(gitHubImage).toBeInTheDocument();
        expect(linkToRepository).toBeInTheDocument();
        expect(animatedCards).toHaveLength(2);
        expect(animatedCards[0]).toHaveStyle({ animationDelay: "0ms" });
        expect(animatedCards[1]).toHaveStyle({ animationDelay: "400ms" });
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
