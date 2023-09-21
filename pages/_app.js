import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
      <div className="text-white">
        <Header />
        <div>
          <Component {...pageProps}/>
        </div>
        <Footer />
      </div>
  );
}
