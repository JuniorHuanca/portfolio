import "@/styles/globals.css";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    // <ThemeProvider enableSystem={true} attribute="class">
    <Component {...pageProps} />
    //</ThemeProvider>
  );
};

export default App;
