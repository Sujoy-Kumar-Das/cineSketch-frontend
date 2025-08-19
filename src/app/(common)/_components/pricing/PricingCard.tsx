import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

interface Feature {
  text: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: Feature[];
  ctaText: string;
  ctaLink: string;
  highlight?: boolean;
}

export default function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      key={plan.id}
      className={`pricing-card bg-zinc-900/50 border ${
        plan.highlight ? "border-2 border-indigo-500/50" : "border-zinc-700/50"
      } p-8 rounded-xl relative`}
    >
      {plan.highlight && (
        <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
      <p className="text-zinc-400 mb-6">{plan.description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold">{plan.price}</span>
        <span className="text-zinc-400">{plan.period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, idx) => (
          <li
            key={idx}
            className={`flex items-center ${
              feature.included ? "text-white" : "text-zinc-500"
            }`}
          >
            {feature.included ? (
              <FaCheckCircle className="text-green-400 mr-2" />
            ) : (
              <FaTimesCircle className="mr-2" />
            )}
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      <a
        href={plan.ctaLink}
        className={`block text-center px-6 py-3 rounded-full font-medium ${
          plan.highlight
            ? "cta-button"
            : "border border-zinc-700 hover:bg-zinc-800 transition-colors"
        }`}
      >
        {plan.ctaText}
      </a>
    </div>
  );
}
