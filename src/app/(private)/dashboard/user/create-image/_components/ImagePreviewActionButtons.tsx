import { AiOutlineEye } from "react-icons/ai";
import { FaDownload, FaSave, FaUpload } from "react-icons/fa";
import PreviewButton from "./PreviewButton";
import PublishButton from "./PublishButton";
import SaveAndDownloadButton from "./SaveAndDownloadButton";
import SaveButton from "./SaveButton";

export default function ImagePreviewActionButtons({
  link,
  title,
}: {
  link: string;
  title: string;
}) {
  return (
    <div className="mt-4">
      <div className="flex md:flex-row flex-col gap-2 md:gap-3">
        <SaveAndDownloadButton imageName={title} imageUrl={link}>
          <FaDownload className="text-xs md:text-base" /> Download
        </SaveAndDownloadButton>

        <SaveButton title={title} image={link}>
          <FaSave /> Save
        </SaveButton>

        <PublishButton title={title} image={link}>
          <FaUpload className="text-xs md:text-base" /> Publish
        </PublishButton>

        <PreviewButton link={link}>
          <AiOutlineEye className="h-4 w-4" />
          Preview
        </PreviewButton>
      </div>
    </div>
  );
}
