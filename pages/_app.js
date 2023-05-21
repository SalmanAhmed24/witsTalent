import "../styles/globals.scss";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
