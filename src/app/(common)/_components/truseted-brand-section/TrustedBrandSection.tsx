import CommonHeader from "@/_components/shared/headers/CommonHeader";
import { FaAmazon, FaApple, FaGoogle, FaMicrosoft } from "react-icons/fa";
import { SiNike } from "react-icons/si";

const brands = [
  { icon: <FaMicrosoft size={48} />, name: "Microsoft" },
  { icon: <FaGoogle size={48} />, name: "Google" },
  { icon: <FaApple size={48} />, name: "Apple" },
  { icon: <SiNike size={48} />, name: "Nike" },
  { icon: <FaAmazon size={48} />, name: "Amazon" },
];

export default function TrustedBrandSection() {
  return (
    <section className="py-12 border-y border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <CommonHeader
          title="Our Trusted Partners"
          subtitle="Proudly collaborating with these leading brands"
        />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-zinc-400 hover:text-white transition-colors"
            >
              {brand.icon}
              <span className="mt-2 text-sm">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
