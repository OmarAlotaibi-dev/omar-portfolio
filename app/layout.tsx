
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://omar-portfolio-black-theta.vercel.app"),
  title: {
    default: "Omar Adnan Alotaibi | Management Information Systems & Technology",
    template: "%s | Omar Adnan Alotaibi",
  },
 description:
  "Professional portfolio of Omar Alotaibi (Omar Adnan Alotaibi | عمر عدنان العتيبي), M.S. in Management Information Systems (MIS), featuring business and systems analysis, digital transformation, software development, databases, data analytics, cloud, and IT.",
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
    "عمر العتيبي",
"عمر العتيبي نظم معلومات إدارية",
"عمر العتيبي محلل أعمال",
"عمر العتيبي محلل نظم",
"عمر العتيبي التحول الرقمي",
"نظم المعلومات الإدارية",
"التحول الرقمي",
"Omar Adnan Alotaibi",
"عمر عدنان العتيبي",
"عمر عدنان العتيبي نظم معلومات إدارية",
"عمر عدنان العتيبي التحول الرقمي",
  ],
  authors: [{ name: "Omar  Alotaibi" }],
  creator: "Omar Adnan Alotaibi",
  verification: {
    google: "GEqwknKP51VKQP1EfoAXPzcd9t9S4Vuc7ToWZyWuCtU",
  },
openGraph: {
  type: "website",
  locale: "en_US",
  title: "Omar Adnan Alotaibi | Management Information Systems & Technology",
  description:
    "Professional portfolio featuring experience, technical projects, research, and skills across information systems, software, data, and IT.",
  siteName: "Omar Adnan Alotaibi Portfolio",
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
  title: "Omar Adnan Alotaibi | Management Information Systems & Technology",
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
      <body>{children}
        <Analytics />
      </body>
    </html>
  );
}