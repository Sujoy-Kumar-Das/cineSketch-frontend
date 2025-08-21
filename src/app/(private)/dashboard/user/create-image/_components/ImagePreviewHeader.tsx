export default function ImagePreviewHeader() {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="font-medium text-sm md:text-base">Preview</h2>
      <div className="text-xs md:text-sm text-zinc-400">
        <span className="text-indigo-400">142</span> credits remaining
      </div>
    </div>
  );
}
