import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://omar-portfolio-black-theta.vercel.app"),
  title: {
    default: "Omar Alotaibi | Management Information Systems & Technology",
    template: "%s | Omar Alotaibi",
  },
  description:
    "Professional portfolio of Omar Alotaibi, M.S. in Management Information Systems, featuring experience and work across business and systems analysis, software development, databases, data analytics, cloud, and IT.",
  keywords: [
    "Omar Alotaibi",
    "Management Information Systems",
    "MIS",
    "Business Analysis",
    "Systems Analysis",
    "Software Development",
    "Database Systems",
    "Data Analytics",
    "Cloud Computing",
    "Information Technology",
    "Digital Transformation",
    "Riyadh",
    "Saudi Arabia",
  ],
  authors: [{ name: "Omar Alotaibi" }],
  creator: "Omar Alotaibi",

openGraph: {
  type: "website",
  locale: "en_US",
  title: "Omar Alotaibi | Management Information Systems & Technology",
  description:
    "Professional portfolio featuring experience, technical projects, research, and skills across information systems, software, data, and IT.",
  siteName: "Omar Alotaibi Portfolio",
  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Omar Alotaibi Professional Portfolio",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  title: "Omar Alotaibi | Management Information Systems & Technology",
  description:
    "Professional portfolio featuring experience, technical projects, research, and skills across information systems, software, data, and IT.",
  images: ["/og-image.png"],
},

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}