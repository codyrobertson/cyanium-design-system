import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@cyanium/ui";

export function Default() {
  return (
    <div className="w-[520px]">
      <Accordion type="single" defaultValue="billing" collapsible>
        <AccordionItem value="billing">
          <AccordionTrigger>How does billing work?</AccordionTrigger>
          <AccordionContent>
            You are billed monthly on the date you subscribed. Upgrades are prorated and downgrades take effect at the next cycle.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="seats">
          <AccordionTrigger>Can I add teammates later?</AccordionTrigger>
          <AccordionContent>
            Yes. Invite teammates anytime from Settings → Members. Each active seat is added to your next invoice.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="cancel">
          <AccordionTrigger>What happens when I cancel?</AccordionTrigger>
          <AccordionContent>
            Your workspace stays active until the end of the paid period, then moves to read-only access.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export function Multiple() {
  return (
    <div className="w-[520px]">
      <Accordion type="multiple" defaultValue={["shipping", "returns"]}>
        <AccordionItem value="shipping">
          <AccordionTrigger>Shipping</AccordionTrigger>
          <AccordionContent>Standard orders ship within 2 business days via tracked courier.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger>Returns</AccordionTrigger>
          <AccordionContent>Unworn items can be returned within 30 days for a full refund.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="warranty">
          <AccordionTrigger>Warranty</AccordionTrigger>
          <AccordionContent>Every product carries a two-year limited manufacturer warranty.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
