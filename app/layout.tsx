import { JSX, ReactNode } from "react";
import { roboto } from "./_lib/fonts";
import { metadata } from "./_lib/metadata";
import "./_styles/globals.css";

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
