import Link from "next/link";
import { FaImages } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center bg-zinc-800/50 border border-zinc-700 rounded-full px-4 py-1.5 mb-6">
          <span className="text-sm font-medium">
            ✨ AI Image Generation 2.0 Released
          </span>
          <Link
            href="#features"
            className="ml-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium"
          >
            Learn more →
          </Link>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Create <span className="hero-gradient">Stunning AI Art</span> in
          Seconds
        </h1>
        <p className="text-xl text-zinc-400 mb-10 max-w-3xl mx-auto">
          Transform your imagination into breathtaking visuals with our
          cutting-edge AI platform. Perfect for artists, designers, marketers,
          and creators of all kinds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/login"
            className="cta-button px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FaWandMagicSparkles /> Start Creating Free
          </Link>
          <Link
            href="#showcase"
            className="border border-zinc-700 hover:bg-zinc-900/50 px-8 py-4 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
          >
            <FaImages /> View Gallery
          </Link>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="flex -space-x-4">
            <img
              className="w-12 h-12 border-2 border-zinc-800 rounded-full"
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User avatar"
            />
            <img
              className="w-12 h-12 border-2 border-zinc-800 rounded-full"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User avatar"
            />
            <img
              className="w-12 h-12 border-2 border-zinc-800 rounded-full"
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="User avatar"
            />
            <div className="w-12 h-12 border-2 border-zinc-800 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-medium">
              10K+
            </div>
          </div>
          <div className="ml-4 text-left">
            <div className="flex items-center">
              <div className="flex -ml-1">
                <i className="fas fa-star text-yellow-400" />
                <i className="fas fa-star text-yellow-400" />
                <i className="fas fa-star text-yellow-400" />
                <i className="fas fa-star text-yellow-400" />
                <i className="fas fa-star text-yellow-400" />
              </div>
              <span className="ml-2 text-sm font-medium">
                5.0 (2K+ reviews)
              </span>
            </div>
            <p className="text-sm text-zinc-400 mt-1">
              Trusted by creators worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
