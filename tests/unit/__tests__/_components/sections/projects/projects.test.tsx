import ToastProvider from "@/app/_components/toast/toastProvider";
import { fetchProjects } from "@/app/_lib/api/fetchProjects";
import { sampleProject } from "@/tests/unit/__mocks__/sampleProject";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { act } from "react";
import Projects from "../../../../../../app/_components/sections/projects/projects";

jest.mock("../../../../../../app/_lib/api/fetchProjects", () => ({
    fetchProjects: jest.fn(),
}));

describe("Projects component", () => {
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

        const warningIcon = await screen.findByAltText("Warning Icon");
        const errorToast = await screen.findByText(errorMessage);

        expect(button).not.toBeDisabled();
        expect(warningIcon).toBeInTheDocument();
        expect(errorToast).toBeInTheDocument();
    });
});
