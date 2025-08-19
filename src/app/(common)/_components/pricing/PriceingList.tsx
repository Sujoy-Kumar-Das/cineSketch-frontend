import PricingCard from "./PricingCard";

const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for trying out AI art generation",
    price: "$0",
    period: "/month",
    features: [
      { text: "20 image generations/month", included: true },
      { text: "Basic AI models", included: true },
      { text: "Standard resolution (1024x1024)", included: true },
      { text: "No commercial license", included: false },
      { text: "No priority generation", included: false },
    ],
    ctaText: "Get Started",
    ctaLink: "./app.html",
  },
  {
    id: "pro",
    name: "Pro Creator",
    description: "For serious artists and content creators",
    price: "$19",
    period: "/month",
    features: [
      { text: "500 image generations/month", included: true },
      { text: "All premium AI models", included: true },
      { text: "High resolution (2048x2048)", included: true },
      { text: "Commercial license", included: true },
      { text: "Priority generation", included: true },
    ],
    ctaText: "Upgrade Now",
    ctaLink: "./app.html",
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For teams and professional studios",
    price: "$99",
    period: "/month",
    features: [
      { text: "Unlimited generations", included: true },
      { text: "All premium AI models", included: true },
      { text: "Ultra HD resolution (4096x4096)", included: true },
      { text: "Commercial license", included: true },
      { text: "Team collaboration", included: true },
    ],
    ctaText: "Contact Sales",
    ctaLink: "./app.html",
  },
];

export default function PricingList() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {pricingPlans.map((plan) => (
        <PricingCard key={plan.id} plan={plan} />
      ))}
    </div>
  );
}
