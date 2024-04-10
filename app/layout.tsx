import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/Header/Header";
import Footer from "./ui/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Daou Cables",
    default: "Daou Cables",
  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex flex-col items-center px-4 sm:px-14">
          <div className="pt-32 max-w-[1300px] w-full">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
