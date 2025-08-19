import CommonHeader from "@/_components/shared/headers/CommonHeader";
import Link from "next/link";
import { FaImages } from "react-icons/fa";
import GalleryList from "./GalleryList";

export default function GallerySection() {
  return (
    <section id="showcase" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <CommonHeader
          title="AI Art Gallery"
          subtitle="See what our community is creating with cineSketch"
        />

        <GalleryList />

        <div className="text-center mt-12">
          <Link
            href={"#"}
            className="inline-flex items-center border border-zinc-700 hover:bg-zinc-900/50 px-8 py-3 rounded-full font-medium transition-colors"
          >
            <FaImages className="mr-2" /> Explore More Creation
          </Link>
        </div>
      </div>
    </section>
  );
}
