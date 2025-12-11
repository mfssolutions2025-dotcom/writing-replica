import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ModalProvider } from "@/context/ModalContext";
import ContactModal from "@/components/ContactModal";
import TawkTo from "@/components/TawkTo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | Phoenix Ghostwriting Services",
  description:
    "Home page for Phoenix Ghostwriting Services - Professional ghostwriting and copywriting services for books, articles, and content creation. Get help with your writing projects from expert ghostwriters.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="text-[70%] lg:text-[85%] 2xl:text-[100%]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-cabin`}
      >
        <ModalProvider>
          {children} <ContactModal />
          <TawkTo />
        </ModalProvider>
      </body>
    </html>
  );
}
