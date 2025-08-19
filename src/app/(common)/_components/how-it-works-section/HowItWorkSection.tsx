import CommonHeader from "@/_components/shared/headers/CommonHeader";
import HowItWorkStep from "./HowItWorkStep";

const steps = [
  {
    number: 1,
    title: "Describe Your Vision",
    description:
      "Enter a text prompt describing what you want to create. Be as detailed as possible for best results.",
    color: "indigo",
  },
  {
    number: 2,
    title: "Customize Settings",
    description:
      "Choose your preferred AI model, art style, and adjust advanced parameters to fine-tune your creation.",
    color: "pink",
  },
  {
    number: 3,
    title: "Generate & Download",
    description:
      "Let our AI work its magic. In seconds, you'll have stunning artwork ready to download or share.",
    color: "purple",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900/50 to-transparent rounded-3xl">
      <CommonHeader
        title="How It Works"
        subtitle="Create stunning AI art in just a few simple steps"
      />

      {/* Steps */}
      <HowItWorkStep steps={steps} />
      <div className="mt-16 max-w-4xl mx-auto bg-zinc-900/50 border border-zinc-700/50 rounded-2xl overflow-hidden">
        <div className="p-4 bg-zinc-800 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="ml-4 text-sm text-zinc-400">
            app.lwsaistudio.com/create
          </div>
        </div>
        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Form */}
            <div className="flex-1">
              <div className="mb-6">
                <label className="block text-zinc-400 text-sm mb-2">
                  Prompt
                </label>
                <textarea
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows={4}
                  placeholder="A majestic lion with a golden mane standing on a cliff at sunset..."
                />
              </div>
              <div className="mb-6">
                <label className="block text-zinc-400 text-sm mb-2">
                  Negative Prompt
                </label>
                <input
                  type="text"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="blurry, low quality, distorted"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-400 text-sm mb-2">
                    Model
                  </label>
                  <select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Stable Diffusion XL</option>
                    <option>DALL·E 3</option>
                    <option>MidJourney v6</option>
                  </select>
                </div>
                <div>
                  <label className="block text-zinc-400 text-sm mb-2">
                    Style
                  </label>
                  <select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Digital Art</option>
                    <option>Photorealistic</option>
                    <option>Anime</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="flex-1 bg-zinc-800 rounded-lg flex items-center justify-center p-4">
              <div className="text-center">
                <i className="fas fa-image text-5xl text-zinc-600 mb-4" />
                <p className="text-zinc-500">
                  Your AI-generated image will appear here
                </p>
              </div>
            </div>
          </div>
          <button className="mt-6 cta-button w-full py-4 rounded-lg font-medium flex items-center justify-center gap-2">
            <i className="fas fa-magic" /> Generate Image
          </button>
        </div>
      </div>
    </section>
  );
}
