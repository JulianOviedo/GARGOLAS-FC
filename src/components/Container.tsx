'use client'

import { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import { ReactNode } from "react";

type Props = {
  sx?: SxProps<Theme>;
  children: ReactNode;
  id?: string;
  component: "section" | "footer" | "div";
};

const Container: React.FC<Props> = ({ component, sx, children, id }) => {
  return (
    <Box
      component={component}
      id={id}
      sx={[
        (theme) => ({
          width: '100%',
          minWidth: '320px',
          maxWidth: '1800px',
          margin: '0 auto',
          [theme.breakpoints.only('xxs')]: {
            px: 4,
          },
          [theme.breakpoints.only('xs')]: {
            px: 6,
          },
          [theme.breakpoints.only('sm')]: {
            px: 8,
          },
          [theme.breakpoints.only('md')]: {
            width: `calc(100% - ${theme.spacing(56)})`,
          },
          [theme.breakpoints.only('lg')]: {
            width: `calc(100% - ${theme.spacing(65)})`,
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  );
};

export default Container;
