import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Section from "../../../../../app/_components/section";
import Tabs from "../../../../../app/_components/tabs/tabs";

describe("Tabs component", () => {
    it("Does not render tabpanel if no items are provided to Tabs", () => {
        const { queryByRole } = render(
            <Section name="test-section">
                <Tabs items={[]} />
            </Section>
        );

        expect(queryByRole("tabpanel")).toBeNull();
    });
});
