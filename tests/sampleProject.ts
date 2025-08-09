import { Project } from "projects";

export const sampleProject: Project = {
    id: 12345678,
    name: "Test Project",
    description: "This is a test project",
    topics: ["test", "project"],
    repository: "https://github.com/user/test-project",
    homepage: "https://example.com/test-project",
    archived: false,
    lastPushedAt: new Date(),
};
