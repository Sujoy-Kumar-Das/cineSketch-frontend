import { IGallery } from "@/interface/gallery.interface";
import MenuContextProvider from "@/providers/MenuContextProvider";
import { getAllGalleryImageByUserService } from "@/service/actions/gallery.service";
import GalleryCard from "./UserGalleryCard";

export default async function UserGalleryImageList() {
  const galleryImages = await getAllGalleryImageByUserService();
  return (
    <MenuContextProvider>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {galleryImages?.data?.map((galleryImage: IGallery) => (
          <GalleryCard key={galleryImage._id} galleryImage={galleryImage} />
        ))}
      </div>
    </MenuContextProvider>
  );
}
