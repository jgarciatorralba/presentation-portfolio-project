import { ReactNode } from "react";
import { roboto } from "./fonts";
import { metadata } from "./metadata";
import "./styles/globals.css";

export { metadata };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): ReactNode {
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
