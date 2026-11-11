"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/data/pages";

export function FAQAccordion({ defaultOpen }: { defaultOpen?: string }) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultOpen}
      className="border-t border-ink/12"
    >
      {faq.map((item, index) => (
        <AccordionItem key={item.question} value={`faq-${index}`}>
          <AccordionTrigger className="group py-6">
            <span className="grid flex-1 grid-cols-[2rem_1fr] items-start gap-4 sm:grid-cols-[2.5rem_1fr]">
              <span className="pt-1 text-[0.68rem] font-bold tracking-[0.12em] text-ink/68">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[1.2rem] leading-snug tracking-[-0.015em] text-ink sm:text-[1.4rem]">
                {item.question}
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pl-0 text-[0.98rem] leading-relaxed text-ink/68 sm:pl-[4rem]">
            <p className="max-w-2xl">{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
