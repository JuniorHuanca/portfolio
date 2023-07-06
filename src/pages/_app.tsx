import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import { Toaster } from "sonner";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
      <Toaster position="top-left" />
    </ThemeProvider>
  );
};

export default App;
