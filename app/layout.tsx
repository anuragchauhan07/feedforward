import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/shared/QueryProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Feedforward",
  description: "Get you product feedback",
  icons: {
    icon: "/012.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <QueryProvider>
        <html lang="en">
          <body className={montserrat.variable}>{children}</body>
        </html>
      </QueryProvider>
    </ClerkProvider>
  );
}
