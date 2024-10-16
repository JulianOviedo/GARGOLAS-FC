import Box from "@mui/material/Box";
import React from "react";
import ImageWithOverlay from "./ImageWithOverlay";
import { New } from "@/app/data";
import { SxProps, Theme } from "@mui/material";

type Props = {
  newsData: New[];
  sx?: SxProps<Theme>;
};

const CONTAINER_HEIGHT = 1000;

const News: React.FC<Props> = ({ sx, newsData }) => {
  return (
    <Box
      sx={[
        {
          width: { xs: "100%" },
          position: "relative",
          height: CONTAINER_HEIGHT,
          display: "flex",
          flexDirection: "column",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {/* Grid de noticias */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
          height: "100%",
        }}
      >
        {newsData.map((news, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              height: CONTAINER_HEIGHT / 4,
            }}
          >
            <ImageWithOverlay
              containerHeight={CONTAINER_HEIGHT}
              image1={news.image1}
              image2={news.image2}
              alt={news.alt}
              title={news.title}
              description={news.description}
              addedAt={news.addedAt}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default News;
