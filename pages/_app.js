import "../styles/globals.css";
import "swiper/swiper-bundle.css";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
