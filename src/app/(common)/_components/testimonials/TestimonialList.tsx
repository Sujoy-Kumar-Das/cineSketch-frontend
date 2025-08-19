import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Game Developer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: `"cineSketch has completely transformed my creative workflow. I can now generate concept art for my games in minutes instead of hours. The quality is outstanding!"`,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Digital Artist",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: `"As a digital artist, I use cineSketch to generate base images that I then refine in Photoshop. It's cut my project time in half and opened up new creative possibilities."`,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Marketing Director",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: `"Our marketing team uses cineSketch to create unique visuals for social media campaigns. The ability to generate exactly what we need on demand has been a game-changer."`,
  },
];

export default function TestimonialList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {testimonials.map((t) => (
        <TestimonialCard key={t.id} testimonial={t} />
      ))}
    </div>
  );
}
