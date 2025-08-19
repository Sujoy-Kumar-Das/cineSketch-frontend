import { IconType } from "react-icons";
import { FaCircle, FaCloudDownloadAlt, FaRobot, FaUsers } from "react-icons/fa";

interface Feature {
  icon: IconType;
  title: string;
  description: string;
  color: string;
  subFeatures: string[];
}

const features: Feature[] = [
  {
    icon: FaRobot,
    title: "Text-to-Image",
    description:
      "Generate stunning images from text prompts using advanced AI models for various art styles.",
    color: "indigo",
    subFeatures: [
      "Multiple AI model options",
      "Supports photorealistic & anime styles",
      "Customizable resolution",
    ],
  },
  {
    icon: FaCloudDownloadAlt,
    title: "Image Download",
    description:
      "Easily download your creations in high resolution and multiple formats, ready for any use.",
    color: "blue",
    subFeatures: [
      "PNG, JPG, and WEBP formats",
      "Up to 4K resolution",
      "One-click download",
    ],
  },
  {
    icon: FaUsers,
    title: "Share Image to the Community",
    description:
      "Showcase your work, get feedback, and collaborate with other creative minds worldwide.",
    color: "green",
    subFeatures: [
      "Community gallery",
      "Like & comment system",
      "Invite-only groups",
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Powerful Features for Creative Minds
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto">
            Everything you need to create, download, and share your AI-generated
            artwork.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`feature-card bg-zinc-900/50 border border-zinc-700/50 p-8 rounded-xl hover:border-${feature.color}-500/30 transition-colors`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 bg-${feature.color}-500/10 rounded-lg mb-4 flex items-center justify-center`}
                >
                  <Icon className={`text-2xl text-${feature.color}-400`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 mb-4">{feature.description}</p>

                {/* Sub-features list */}
                <ul className="text-zinc-400 text-sm space-y-2">
                  {feature.subFeatures.map((sub, i) => (
                    <li key={i} className="flex items-center">
                      <FaCircle
                        className={`text-${feature.color}-400 mr-2`}
                        size={8}
                      />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
