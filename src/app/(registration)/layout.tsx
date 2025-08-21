import { Toaster } from "sonner";
import Glow from "../(common)/_components/glow/Glow";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Glow />
      <main>{children}</main>
      <Toaster position="top-center" />
    </>
  );
}
