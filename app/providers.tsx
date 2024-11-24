// react
import { ReactNode } from "react";

// components
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
