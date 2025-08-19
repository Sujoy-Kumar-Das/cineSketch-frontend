interface Step {
  number: number;
  title: string;
  description: string;
  color: string;
}

export default function HowItWorkStep({ steps }: { steps: Step[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {steps.map((step) => (
        <div
          key={step.number}
          className="flex flex-col items-center text-center"
        >
          <div
            className={`w-16 h-16 bg-${step.color}-500/10 rounded-full flex items-center justify-center mb-6 text-${step.color}-400 text-xl font-bold border-2 border-${step.color}-500/30`}
          >
            {step.number}
          </div>
          <h3 className="text-xl font-bold mb-3">{step.title}</h3>
          <p className="text-zinc-400">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
