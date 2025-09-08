import { roboto } from "@lib/fonts";
import { metadata } from "@lib/metadata";
import "@styles/globals.css";
import { JSX, ReactNode } from "react";

export { metadata };

export default function Layout({ children }: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <html lang="en">
      <body>
        <div className={`children-wrapper ${roboto.className}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
