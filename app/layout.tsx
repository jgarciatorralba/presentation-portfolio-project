import { ReactNode } from "react";
import { metadata } from "./metadata";
import "./styles/globals.css";

export { metadata };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): ReactNode {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
