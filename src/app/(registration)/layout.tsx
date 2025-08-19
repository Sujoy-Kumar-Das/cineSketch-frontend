import { Toaster } from "sonner";
import Glow from "../(common)/_components/glow/Glow";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <Glow />
          {children}
          <Toaster position="top-center" />
        </main>
      </body>
    </html>
  );
}
