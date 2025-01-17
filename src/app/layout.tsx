import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { GoogleOAuthProvider } from "@react-oauth/google";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skillsyard",
  description:
    "Welcome to SKILLSYARD, a leading destination for acquiring essential skills and fostering personal and professional growth. At SKILLSYARD, we believe in empowering individuals with the knowledge and expertise needed to excel in today's dynamic and competitive world. We deliver the real prospectives of skills to our students and give wings to their career.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GoogleOAuthProvider clientId="825271755568-f2bh2ggfomdit7m2b8h27h88bpnsl8sn.apps.googleusercontent.com">
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <main className="select-none">{children}</main>
          <Footer />
        </body>
      </html>
    </GoogleOAuthProvider>
  );
}
