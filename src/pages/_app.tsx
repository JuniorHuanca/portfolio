import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";

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
