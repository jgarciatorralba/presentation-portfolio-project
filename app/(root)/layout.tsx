import { ReactNode } from "react";
import Footer from "../_sections/footer";
import Header from "../_sections/header";

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): ReactNode {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
