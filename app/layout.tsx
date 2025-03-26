import { ReactNode } from "react";
import { roboto } from "./_lib/fonts";
import { metadata } from "./_lib/metadata";
import "./_styles/globals.css";

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
