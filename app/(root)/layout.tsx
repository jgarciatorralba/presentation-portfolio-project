import { ReactNode } from "react";
import Footer from "../_components/footer/footer";
import Header from "../_components/header/header";

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): ReactNode {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
