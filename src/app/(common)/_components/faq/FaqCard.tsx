import { FaChevronDown } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

interface FaqCardProps {
  faq: FAQItem;
  index: number;
  currentIndex: number | null;
  onToggle: (index: number) => void;
}
export default function FaqCard({
  faq,
  index,
  currentIndex,
  onToggle,
}: FaqCardProps) {
  return (
    <div className={`mb-6 border-b border-zinc-700/50 pb-6`}>
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => onToggle(index)}
      >
        <h3 className="text-lg font-medium">{faq.question}</h3>
        <FaChevronDown
          className={`text-indigo-400 transition-transform duration-300 ${
            currentIndex === index ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`mt-4 text-zinc-400 transition-all duration-300 ${
          currentIndex === index
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <p>{faq.answer}</p>
      </div>
    </div>
  );
}
