import { FetchProjectsOptions, FetchProjectsResponse, ProjectData } from "projects";
import { fetchProjects } from "../../../../../app/_lib/api/fetchProjects";

describe("fetchProjects", () => {
    const baseUrl = "https://example.com";

    const sampleProject: ProjectData = {
        id: 12345678,
        name: "Test Project",
        description: "This is a test project",
        topics: ["test", "project"],
        repository: "https://github.com/user/test-project",
        homepage: "https://example.com/test-project",
        archived: false,
        lastPushedAt: new Date().toISOString(),
    };

    beforeEach(() => {
        global.fetch = jest.fn();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it("Returns projects and next=true on valid response", async () => {
        const mockResponse = {
            projects: [sampleProject],
        };

        (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: async () => mockResponse,
            headers: {
                get: (header: string) => (header === "Next" ? "1" : null),
            },
        });

        const options: FetchProjectsOptions = {
            baseUrl,
        };

        const { error, projects, next }: FetchProjectsResponse = await fetchProjects(options);

        expect(error).toBeNull();
        expect(next).toBe(true);
        expect(projects.length).toBe(1);
        expect(projects[0]).toMatchObject({
            id: sampleProject.id,
            name: sampleProject.name,
            description: sampleProject.description,
            topics: sampleProject.topics,
            repository: sampleProject.repository,
            homepage: sampleProject.homepage,
            archived: sampleProject.archived,
            lastPushedAt: new Date(sampleProject.lastPushedAt),
        });
    });

    it("Returns error on non-ok response", async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: false,
            status: 500,
            statusText: "Internal Server Error",
        });

        const { error, projects, next }: FetchProjectsResponse = await fetchProjects({ baseUrl });

        expect(projects).toEqual([]);
        expect(next).toBe(false);
        expect(error).not.toBeNull();
        expect(error?.message).toMatch(/Internal Server Error/);
    });

    it("Returns error on invalid JSON format", async () => {
        const invalidResponse = { foo: "bar" };

        (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: async () => invalidResponse,
            headers: {
                get: () => "0",
            },
        });

        const { error, projects, next }: FetchProjectsResponse = await fetchProjects({ baseUrl });

        expect(error).not.toBeNull();
        expect(error?.message).toMatch(/Invalid response format/);
        expect(projects).toEqual([]);
        expect(next).toBe(false);
    });

    it("Returns empty projects and next=false if no projects are returned", async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: async () => ({ projects: [] }),
            headers: {
                get: () => "0",
            },
        });

        const { error, projects, next }: FetchProjectsResponse = await fetchProjects({ baseUrl });

        expect(error).toBeNull();
        expect(projects.length).toBe(0);
        expect(next).toBe(false);
    });

    it("Handles fetch errors gracefully", async () => {
        (global.fetch as jest.Mock).mockRejectedValue(new Error("Network error"));

        const { error, projects, next }: FetchProjectsResponse = await fetchProjects({ baseUrl });

        expect(projects).toEqual([]);
        expect(next).toBe(false);
        expect(error).not.toBeNull();
        expect(error?.message).toMatch(/Network error/);
    });

    it("Includes maxPushedAt as ISO string if provided", async () => {
        const mockDate = new Date("2023-01-01T00:00:00.000Z");

        (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: async () => ({ projects: [sampleProject] }),
            headers: {
                get: () => "0",
            },
        });

        const { error, projects, next }: FetchProjectsResponse = await fetchProjects({
            baseUrl,
            maxPushedAt: mockDate,
        });

        expect(error).toBeNull();
        expect(next).toBe(false);
        expect(projects.length).toBe(1);

        const calledUrl = (global.fetch as jest.Mock).mock.calls[0][0] as string;

        expect(calledUrl).toContain(`maxPushedAt=${encodeURIComponent(mockDate.toISOString())}`);
    });

    it("Includes urlParams in the request", async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: async () => ({ projects: [sampleProject] }),
            headers: {
                get: () => "0",
            },
        });

        const urlParams = { pageSize: "5" };
        const { error, projects, next }: FetchProjectsResponse = await fetchProjects({
            baseUrl,
            urlParams,
        });

        expect(error).toBeNull();
        expect(next).toBe(false);
        expect(projects.length).toBe(1);

        const calledUrl = (global.fetch as jest.Mock).mock.calls[0][0] as string;

        expect(calledUrl).toContain(`pageSize=${encodeURIComponent(urlParams.pageSize)}`);
    });
});
