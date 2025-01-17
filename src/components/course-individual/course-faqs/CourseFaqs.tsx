'use client';
import { courseFaqs } from '@/utils/utils';
import { useState } from 'react';

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container px-side-padding my-24">
      {/* Heading */}
      <h1 className="text-center mb-8 text-h1-heading leading-h1-line-height font-h1-weight text-all-heading-color">
        Frequently Asked Questions
      </h1>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-8">
        {courseFaqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item overflow-hidden rounded-lg shadow-sm shadow-gray-200"
          >
            {/* Question */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center text-left p-6 text-[18px] focus:outline-none"
            >
              <h6>{faq.question}</h6>
              <span
                className={`text-2xl font-bold transform transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
              >
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>

            {/* Answer */}
            {activeIndex === index && (
              <div className="faq-answer p-6 text-para-small leading-para-small-line-height text-all-para-color">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}






              