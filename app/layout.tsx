import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import {
  // AuthContext,
  AuthContextProvider,
} from "@/context/AuthContextProvider";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Gif Spotted",
  description: "Your personalize GIF generator",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          poppins.className,
          "w-screen min-h-screen flex  flex-col items-center scroll-smooth relative "
        )}
      >
        <AuthContextProvider>
          <main className="md:max-w-6xl w-full  h-full relative flex flex-col">
            {children}
          </main>
        </AuthContextProvider>
      </body>
    </html>
  );
}
