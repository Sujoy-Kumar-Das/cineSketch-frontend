export default function convertStorage(kb: number): string {
  if (kb < 1024) {
    return `${kb.toFixed(2)} KB`;
  }

  const mb = kb / 1024;
  if (mb < 1024) {
    return `${mb.toFixed(2)} MB`;
  }

  const gb = mb / 1024;
  if (gb < 1024) {
    return `${gb.toFixed(2)} GB`;
  }

  const tb = gb / 1024;
  return `${tb.toFixed(2)} TB`;
}
