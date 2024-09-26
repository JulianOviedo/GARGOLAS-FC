"use client";

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@mui/material";


const theme = createTheme({
    typography: {
        fontFamily: 'Ubuntu',
      },
});

export default function ThemeClientProvider({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }