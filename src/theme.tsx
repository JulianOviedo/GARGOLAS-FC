"use client";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";

import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
});

const ubuntuFontFamily = `${ubuntu.style.fontFamily}, Helvetica, Arial, sans-serif`;

const theme = createTheme({
  typography: {
    fontFamily: ubuntuFontFamily,
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 480,
      sm: 768,
      md: 1200,
      lg: 1440,
      xl: 2550,
    },
  },
  palette: {
    common: {
      white: '#FFFFFF',
      black: '#343434',
    },
    background: {
      default: '#ebedff'
    },
    primary: {
      'main' : '#31306D',
      'light' : '#60607d'
    },
    secondary: {
      'main': '#d6d6d6',
      'light': '#A1A1A1',
      'dark': '#5E5E5E',
    }
  }
});

export default function ThemeClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
