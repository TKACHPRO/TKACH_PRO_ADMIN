import "./globals.css";
import { Providers } from "@/components/providers/providers";

export const metadata = {
  title: "Dashboard menu",
  description: "TkachPro admin dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark text-light px-4">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
