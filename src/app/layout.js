import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Script from "next/script"; // Import Script component 
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Chavez Concrete",
    template: "%s | Chavez Concrete",
  },
  description: "Affordable and professional concrete services in North Carolina.",
  icons: {
    icon: "/favicon.ico", // Specify the favicon path here
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />

        <main>{children}</main>

        <Footer />

        {/* Load SMTP.js asynchronously */}
      </body>
    </html>
  );
}
