import type { Metadata } from "next";
import "./globals.css";
import ThemeClientProvider from "@/theme";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Gargolas Futbol Club",
  description: "Equipo con mucha pasion",
};

const font = "/fonts/Ubuntu.woff";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link key={font} rel="preload" href={font} as="font" crossOrigin="" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
      </head>
      <ThemeClientProvider>
        <body>
          <NavBar />
          {children}
        </body>
      </ThemeClientProvider>
    </html>
  );
}
