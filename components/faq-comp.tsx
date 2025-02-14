"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "item-1",
    question: "What is an Invoice?",
    answer:
      "An invoice is a commercial document issued by a seller to a buyer that itemizes a transaction between the two parties.",
  },
  {
    id: "item-2",
    question: "What is the difference between Invoice and Bill?",
    answer:
      "While both documents record transactions, an invoice is sent by the seller to request payment, while a bill is received by the buyer indicating payment is due.",
  },
  {
    id: "item-3",
    question: "What is a Billing Software?",
    answer:
      "Billing software automates invoice creation, payment tracking, and financial record management, ensuring accuracy and efficiency in the billing process.",
  },
  {
    id: "item-4",
    question: "How does an online billing software work?",
    answer:
      "Online billing software helps businesses manage their billing processes digitally, from creating invoices to tracking payments and generating reports.",
  },
  {
    id: "item-5",
    question: "For which businesses and industries is this software suitable?",
    answer:
      "This software is suitable for businesses of all sizes across various industries that need to manage billing and invoicing processes efficiently.",
  },
];

export default function FAQSection() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-Inter">
      <div className="max-w-3xl w-full mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-[#667085] text-sm uppercase tracking-wider">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <h1 className="text-[#212626] text-4xl md:text-5xl font-medium">
            Got Questions? We got
            <br />
            you covered.
          </h1>
        </div>

        <Accordion
          type="single"
          collapsible
          className="space-y-4"
          onValueChange={(value) => setActiveItem(value)}
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-[1px] rounded-[20px] px-8 py-4 border-[#A3BFBE]"
            >
              <AccordionTrigger
                className={`${
                  activeItem === item.id
                    ? "text-[#00DC82] hover:no-underline"
                    : "text-[#667085] hover:text-[#667085] hover:no-underline"
                } text-left text-lg`}
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#667085]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
