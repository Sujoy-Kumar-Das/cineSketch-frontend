import GalleryCard from "./GalleryCard";

const galleryItems = [
  {
    id: "1",
    title: "Mystical Forest",
    description: `"A magical forest with glowing plants and fairies, digital art"`,
    imageUrl: "https://source.unsplash.com/random/600x600/?fantasy",
    user: {
      name: "creative_soul",
      avatarUrl: "https://randomuser.me/api/portraits/women/12.jpg",
    },
  },
  {
    id: "2",
    title: "Neon Cityscape",
    description: `"Cyberpunk city at night with rain reflections, 4k ultra detailed"`,
    imageUrl: "https://source.unsplash.com/random/600x600/?cyberpunk",
    user: {
      name: "digital_dreamer",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  {
    id: "3",
    title: "Neon Cityscape",
    description: `"Cyberpunk city at night with rain reflections, 4k ultra detailed"`,
    imageUrl: "https://source.unsplash.com/random/600x600/?cyberpunk",
    user: {
      name: "digital_dreamer",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  {
    id: "4",
    title: "Neon Cityscape",
    description: `"Cyberpunk city at night with rain reflections, 4k ultra detailed"`,
    imageUrl: "https://source.unsplash.com/random/600x600/?cyberpunk",
    user: {
      name: "digital_dreamer",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
];

export default function GalleryList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {galleryItems.map((item) => (
        <GalleryCard item={item} key={item.id} />
      ))}
    </div>
  );
}
