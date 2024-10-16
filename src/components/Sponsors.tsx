import { SxProps, Theme, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import Image from "next/image";
import Container from "./Container";
import { common } from "@mui/material/colors";

type Props = {
  sx?: SxProps<Theme>;
};

const sponsorsPaths = [
  {
    src: "/images/sponsors/shop-paint.png",
    alt: "Sponsor Shop Paint",
    width: 180,
    height: 60,
  },
  {
    src: "/images/sponsors/famiglia.png",
    alt: "Sponsor Famiglia",
    width: 130,
    height: 100,
  },
  {
    src: "/images/sponsors/master-service.png",
    alt: "Sponsor Master Service",
    width: 150,
    height: 100,
  },
  {
    src: "/images/sponsors/soniando-colchones.png",
    alt: "Sponsor Soniando Colchones",
    width: 180,
    height: 80,
  },
  {
    src: "/images/sponsors/fraterno.png",
    alt: "Sponsor Fraterno",
    width: 130,
    height: 120,
  },
];



const Sponsors: React.FC<Props> = ({ sx }) => {
  return (
    <Container
      component="section"
      id="sponsors-section"
      sx={{
        overflow: "clip",
      }}
    >
      <Typography
        component="h2"
        color="primary.main"
        sx={{
          textAlign: "left",
          typography: {xxs: 'h4', sm: 'h2'},
          pt: 15,
          mb: {xxs: 8, sm: 15},
        }}
      >
        Confían en Nosotros
      </Typography>
      <Box
        sx={[{
          display: "flex",
          flexDirection: {xxs : 'column', sm: 'row'},
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: {xxs: 6, md: 8},
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      >
        {
          sponsorsPaths.map(({src, alt, width, height}, idx) => (
            <Box key={idx} sx={{
              width: width,
              height: height,
              position: 'relative',
            }}>
              <Image src={src} alt={alt} fill sizes="100%"/>
            </Box>
          ))
        }
      </Box>
    </Container>
  );
};

export default Sponsors;
