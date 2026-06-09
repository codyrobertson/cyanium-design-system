import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { axe } from "vitest-axe";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";
import { Modal } from "./dialog";
import { DataTable, type DataTableColumn } from "./data-table";

describe("a11y", () => {
  it("accordion has no violations", async () => {
    const { container } = render(
      <Accordion type="single" collapsible>
        <AccordionItem value="one">
          <AccordionTrigger>Section</AccordionTrigger>
          <AccordionContent>Body</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("dialog has no violations", async () => {
    const { container } = render(
      <Modal open title="Title" description="Description">
        Body
      </Modal>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("data table has no violations", async () => {
    const columns: DataTableColumn<{ id: string; name: string }>[] = [
      { id: "name", header: "Name", cell: (row) => row.name },
    ];
    const { container } = render(
      <DataTable columns={columns} data={[{ id: "1", name: "Ada" }]} getRowId={(row) => row.id} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
