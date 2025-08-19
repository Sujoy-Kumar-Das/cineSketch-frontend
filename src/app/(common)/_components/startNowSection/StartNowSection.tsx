import CommonHeader from "@/_components/shared/headers/CommonHeader";
import Link from "next/link";

export default function StartNowSection() {
  return (
    <section className="py-20 text-center">
      <div className="bg-zinc-900/50 border border-zinc-700/50 rounded-2xl p-12 max-w-4xl mx-auto relative overflow-hidden">
        {/* Decorative Blurs */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl -z-10"></div>

        <CommonHeader
          title="Ready to Unleash Your Creativity?"
          subtitle="Join thousands of artists, designers, and creators using cineSketch
          to bring their visions to life."
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="./app.html"
            className="cta-button px-8 py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <i className="fas fa-magic"></i> Start Creating Free
          </Link>
          <Link
            href="#pricing"
            className="border border-zinc-700 hover:bg-zinc-900/50 px-8 py-4 rounded-full font-medium transition-colors inline-flex items-center justify-center gap-2"
          >
            <i className="fas fa-crown"></i> View Premium Plans
          </Link>
        </div>
      </div>
    </section>
  );
}
