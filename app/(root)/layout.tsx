import { ReactNode } from "react";
import Footer from "../_components/footer/footer";
import Header from "../_components/header/header";
import ToastProvider from "../_components/toast/toastProvider";

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): ReactNode {
  return (
    <>
      <Header />
      <ToastProvider>{children}</ToastProvider>
      <Footer />
    </>
  );
}
