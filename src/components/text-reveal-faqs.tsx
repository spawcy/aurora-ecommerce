"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { FAQ_ITEMS } from "@/const/static/faq-items";

export default function FAQs() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-5 md:gap-12">
          <div className="md:col-span-2">
            <h2 className="text-foreground text-4xl font-bold tracking-tight">FAQs</h2>
            <p className="text-muted-foreground mt-4 text-balance text-lg leading-relaxed">Find comprehensive information on product specifications, technical guides, and your order services right here.</p>
          </div>

          <div className="md:col-span-3">
            <Accordion type="single" collapsible>
              {FAQ_ITEMS.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border-b border-gray-200 dark:border-gray-600">
                  <AccordionTrigger className="text-left cursor-pointer text-base font-medium hover:no-underline">{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <BlurredStagger text={item.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* <p className="text-muted-foreground mt-6 md:hidden">
            Can't find what you're looking for? Contact our{" "}
            <Link href="#" className="text-primary font-medium hover:underline">
              customer support team
            </Link>
          </p> */}
        </div>
      </div>
    </section>
  );
}

export const BlurredStagger = ({ text = "built by ruixen.com" }: { text: string }) => {
  const headingText = text;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
      },
    },
  };

  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <>
      <div className="w-full">
        <motion.p variants={container} initial="hidden" animate="show" className="text-base leading-relaxed break-words whitespace-normal">
          {headingText.split("").map((char, index) => (
            <motion.span key={index} variants={letterAnimation} transition={{ duration: 0.3 }} className="inline-block text-muted-foreground">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </>
  );
};
