import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DynamicCheckbox } from "./dynamic-checkbox";
import { DynamicRadio } from "./dynamic-radio";

export default function DynamicAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger className="cursor-pointer">Product</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <DynamicRadio />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="cursor-pointer">System support</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <DynamicCheckbox />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="cursor-pointer">Interface</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>We stand behind our products with a comprehensive 30-day return policy. If you&apos;re not completely satisfied, simply return the item in its original condition.</p>
          <p>Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
