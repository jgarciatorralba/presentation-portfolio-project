import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Resume from "../../../../app/(root)/resume/page";

describe("Resume page", () => {
    beforeEach(() => {
        render(<Resume />);
    });

    it("renders the profile and all resume sections", () => {
        expect(screen.getByRole("heading", { name: "Jorge García Torralba", level: 1 })).toBeInTheDocument();

        for (const section of ["Experience", "Education", "Skills", "Languages", "Certificates"]) {
            expect(screen.getByRole("heading", { name: section, level: 2 })).toBeInTheDocument();
        }
    });

    it("renders work and education dates using the full English month", () => {
        expect(screen.getByText("June 2024 - Present")).toBeInTheDocument();
        expect(screen.getByText("April 2022 - June 2024")).toBeInTheDocument();
        expect(screen.getByText("March 2020 - December 2020")).toBeInTheDocument();
        expect(screen.getByText("2018 - 2027")).toBeInTheDocument();
    });

    it("renders the certificate using its configured link and icon", () => {
        const certificateLink = screen.getByRole("link", { name: "AWS Certified Cloud Practitioner" });
        const certificateIcon = document.querySelector('img[src*="aws-certified-cloud-practitioner.svg"]');

        expect(certificateLink).toHaveAttribute(
            "href",
            "https://www.credly.com/badges/7afe9d3e-855d-44c0-ab09-665c7329f8da/public_url",
        );
        expect(certificateIcon).toBeInTheDocument();
    });

    it("renders external profile links and the PDF download link", () => {
        const profileLinks = screen.getAllByRole("link", { name: "jgarciatorralba" });

        expect(profileLinks.map(link => link.getAttribute("href"))).toEqual([
            "https://www.linkedin.com/in/jgarciatorralba/",
            "https://github.com/jgarciatorralba",
        ]);
        expect(screen.getByRole("link", { name: "Download resume PDF" })).toHaveAttribute("href", "/resume.pdf");
    });
});
