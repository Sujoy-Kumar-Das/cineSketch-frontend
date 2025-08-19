import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}
export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div className="testimonial-card bg-zinc-900/50 border border-zinc-700/50 p-8 rounded-xl">
      <div className="flex items-center mb-4">
        <div className="flex -ml-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))}
        </div>
      </div>
      <p className="text-zinc-300 mb-6 italic">{testimonial.text}</p>
      <div className="flex items-center">
        <Image
          src={testimonial.avatar}
          className="w-10 h-10 rounded-full mr-4"
          alt={testimonial.name}
          height={40}
          width={40}
        />
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-sm text-zinc-400">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
