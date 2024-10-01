import { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

type Props = {
  sx?: SxProps<Theme>;
};

const BurgerMenuIcon: React.FC<Props> = ({sx}) => {
  return (
    <Box
      component="svg"
      width="24px"
      height="24px"
      viewBox="0 0 12 12"
      enableBackground="new 0 0 12 12"
      version="1.1"
      xmlSpace="preserve"
      sx={sx}
    >
      <Box component="g">
        <rect fill="#FFFFFF" height="1" width="11" x="0.5" y="5.5" />
        <rect fill="#FFFFFF" height="1" width="11" x="0.5" y="2.5" />
        <rect fill="#FFFFFF" height="1" width="11" x="0.5" y="8.5" />
      </Box>
    </Box>
  );
};

export default BurgerMenuIcon;
