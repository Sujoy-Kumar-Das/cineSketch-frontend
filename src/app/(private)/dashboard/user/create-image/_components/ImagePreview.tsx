import ImagePreviewActionButtons from "./ImagePreviewActionButtons";
import ImagePreviewHeader from "./ImagePreviewHeader";
import ImagePreviewResult from "./ImagePreviewResult";

interface ImagePreviewProps {
  link?: string;
  title: string;
  error?: string;
  loading?: boolean;
  historyId: string;
}

export default function ImagePreview({
  link,
  title,
  error,
  loading = false,
  historyId,
}: ImagePreviewProps) {
  return (
    <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-4 md:p-6 h-full flex flex-col">
      {/* Header */}
      <ImagePreviewHeader />
      {/* Preview Area */}
      <ImagePreviewResult link={link} error={error} loading={loading} />

      {/* Action Buttons */}
      {link && !error && !loading && (
        <ImagePreviewActionButtons
          historyId={historyId}
          link={link}
          title={title}
        />
      )}
    </div>
  );
}
