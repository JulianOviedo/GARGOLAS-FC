import { SxProps, Theme } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";

export type HistoryCardProps = {
  sx?: SxProps<Theme>;
  imageSrc: string;
  description: string;
  title?: string;
  topImagePosition: number;
  leftImagePosition: number;
};

const HistoryCard: React.FC<HistoryCardProps> = ({
  sx,
  topImagePosition,
  leftImagePosition,
  description,
  title,
  imageSrc,
}) => {
  return (
    <Box
      sx={[
        {
          position: "relative",
          borderRadius: 10,
          boxShadow: 3,
          borderColor: "secondary.dark",
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          zIndex: 0,
          px: 3,
          py: 4,
          maxWidth: { xs: 325 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {title ? (
        <Typography
          component="h4"
          sx={{
            fontSize: 20,
            fontWeight: "bolder",
          }}
        >
          {title}
        </Typography>
      ) : null}
      <Typography
        color="common.black"
        sx={{
          fontWeight: "light",
        }}
      >
        {description}
      </Typography>
      <Box
        sx={{
          position: "absolute",
          zIndex: 0,
          opacity: 0.4,
          top: topImagePosition,
          left: leftImagePosition,
          width: 300,
          aspectRatio: 0.5,
        }}
      >
        <Image src={imageSrc} alt="Gargolas Football Club" sizes="100%" fill />
      </Box>
    </Box>
  );
};

export default HistoryCard;