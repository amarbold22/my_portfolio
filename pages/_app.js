import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <div className="text-white h-screen">
        <Header />
        <div className="h-[calc(100%-6rem)]">
          <Component {...pageProps}/>
        </div>
        <Footer />
      </div>
    </AnimatePresence>
  );
}
