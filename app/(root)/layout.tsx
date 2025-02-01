import { ReactNode } from "react";
import Footer from "../_components/footer";
import Header from "../_components/header";
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
