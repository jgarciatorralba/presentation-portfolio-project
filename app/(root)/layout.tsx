import { ReactNode } from "react";
import Footer from "../_sections/footer";
import Header from "../_sections/header";
import { roboto } from "../fonts";

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): ReactNode {
  return (
    <>
      <Header />
      <div className={`children-wrapper ${roboto.className}`}>
        {children}
      </div>
      <Footer />
    </>
  );
}
