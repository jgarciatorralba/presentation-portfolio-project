import { ReactNode } from "react";
import Footer from "../_sections/footer";
import Header from "../_sections/header";
import "../styles/globals.css";
import { roboto } from "./fonts";
import { metadata } from "./metadata";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactNode {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className={`max-w-7xl px-6 mx-auto ${roboto.className}`}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
