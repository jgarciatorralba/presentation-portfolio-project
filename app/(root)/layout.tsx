import Footer from "@components/footer/footer";
import Header from "@components/header/header";
import ToastProvider from "@components/toast/toastProvider";
import { JSX, ReactNode } from "react";

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <>
      <Header />
      <ToastProvider>{children}</ToastProvider>
      <Footer />
    </>
  );
}
