import "@/styles/globals.css";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainNav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
