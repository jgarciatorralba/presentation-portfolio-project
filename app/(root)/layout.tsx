import { ReactNode } from "react";
import Footer from "../_components/footer";
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
      <body
        className={roboto.variable}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
