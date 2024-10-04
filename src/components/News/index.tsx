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
      {/* primera noticia (principal) */}
      <Box sx={{ height: CONTAINER_HEIGHT / 2 }}>
        <ImageWithOverlay
          containerHeight={CONTAINER_HEIGHT}
          src={newsData[0].src}
          alt={newsData[0].alt}
          title={newsData[0].title}
          description={newsData[0].description}
          isPrimary={newsData[0].isPrimary}
        />
      </Box>

      {/* Segundas dos */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: CONTAINER_HEIGHT / 4,
        }}
      >
        {newsData.slice(1).map((news, index) => (
          <Box
            key={index}
            sx={{
              width: "50%",
              position: "relative",
            }}
          >
            <ImageWithOverlay
              containerHeight={CONTAINER_HEIGHT}
              src={news.src}
              alt={news.alt}
              title={news.title}
              description={news.description}
              isPrimary={news.isPrimary}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default News;
