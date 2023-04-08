// import '@/styles/globals.css'
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const montserrat = Montserrat({
  weight: "500",
  display: "swap",
  subsets: ["latin"],
});

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({
  colors,
  gradients: {
    "gradient-1": "linear-gradient(65deg, #090979 20%, #cf00ff 100%)",
  },
  fonts: {
    montserrat: montserrat.style.fontFamily,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
