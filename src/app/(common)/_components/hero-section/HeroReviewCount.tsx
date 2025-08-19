import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";

const images = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
];

export default function HeroReviewCount() {
  return (
    <div className="mt-12 flex justify-center">
      <div className="flex -space-x-4">
        {images.map((image) => (
          <Image
            height={50}
            width={50}
            priority
            src={image}
            alt="user avatar"
            key={image}
            className="w-12 h-12 border-2 border-zinc-800 rounded-full"
          />
        ))}

        <div className="w-12 h-12 border-2 border-zinc-800 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-medium">
          10K+
        </div>
      </div>

      <div className="ml-4 text-left">
        <div className="flex items-center">
          <div className="flex -ml-1">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <GoStarFill key={i} className="!text-yellow-400 !text-xl" />
              ))}
          </div>
          <span className="ml-2 text-sm font-medium">5.0 (2K+ reviews)</span>
        </div>
        <p className="text-sm text-zinc-400 mt-1">
          Trusted by creators worldwide
        </p>
      </div>
    </div>
  );
}
