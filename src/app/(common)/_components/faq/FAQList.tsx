"use client";
import { useState } from "react";
import FaqCard from "./FaqCard";

const faqs = [
  {
    question: "How does the AI image generation work?",
    answer:
      "Our platform uses advanced diffusion models that have been trained on millions of images. You provide a text prompt describing what you want to create, and the AI generates unique images based on that description. You can further refine the results with various settings and parameters.",
  },
  {
    question: "Can I use the generated images commercially?",
    answer:
      "Yes! With our Pro and Enterprise plans, you receive full commercial rights to all images you generate. The Free plan is for personal use only. We recommend reviewing our Terms of Service for complete details about usage rights.",
  },
  {
    question: "What's the difference between the AI models?",
    answer:
      "We offer several AI models, each optimized for different styles and use cases. Our Stable Diffusion models are great for artistic and creative generations, while DALL·E excels at more realistic images. MidJourney produces highly stylized artwork. You can experiment with different models to see which works best for your needs.",
  },
  {
    question: "How do I get the best results from the AI?",
    answer:
      "For best results, be as specific as possible in your prompts. Include details about style, composition, lighting, and mood. Use our prompt builder tool for guidance. Negative prompts can help eliminate unwanted elements. Don't hesitate to experiment with different settings and regenerate images multiple times.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. You can cancel your subscription at any time through your account settings. When you cancel, you'll continue to have access to the paid features until the end of your current billing period.",
  },
];

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <FaqCard
          key={index}
          index={index}
          faq={faq}
          currentIndex={openIndex}
          onToggle={toggleFAQ}
        />
      ))}
    </div>
  );
}
