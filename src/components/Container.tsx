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
      sx={[{ px: {xxs: 3, md: 10, xl: 30} }, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      {children}
    </Box>
  );
};

export default Container;
