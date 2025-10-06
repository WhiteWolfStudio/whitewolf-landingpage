import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "White Wolf Studios | Mobile Apps, Web Apps & AI Solutions",
  description: "White Wolf Studios builds cutting-edge mobile apps, web applications, and AI solutions for companies and individuals.",
  keywords: "mobile apps, web development, AI solutions, software development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
