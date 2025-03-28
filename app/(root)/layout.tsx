import { ReactNode } from "react";
import Footer from "../_components/sections/footer";
import Header from "../_components/sections/header";

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): ReactNode {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
