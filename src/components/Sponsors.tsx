import { SxProps, Theme, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import Image from "next/image";

type Props = {
  sx?: SxProps<Theme>;
};

const Sponsors: React.FC<Props> = ({ sx }) => {
  return (
    <Box
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
          fontSize: 30,
          fontWeight: "bolder",
          textAlign: "center",
          mb: 4,
        }}
      >
        Confían en Nosotros
      </Typography>
      <Box
        sx={[{
          display: "flex",
          flexDirection: {xs : 'column', md: 'row'},
          alignItems: 'center',
          gap: {xs: 2, md: 4},
          transform: { md: 'translateX(calc(100vw))', xs: 'unset' },
          animation: { md: 'animateContainer 8s linear forwards infinite', xs: 'unset' },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
        {
          '@keyframes animateContainer': {
            from: {
              transform: 'translateX(calc(100vw))',
            },
            to: {
              transform: 'translateX(calc(-100%))',
            },
          },
        },
      ]}
      >
        <Box
          sx={{
            position: "relative",
            width: 180,
            height: 60,
          }}
        >
          <Image
            src="/images/sponsors/Shop-Paint.png"
            alt="Sponsor Shop Paint"
            fill
            sizes="100%"
          />
        </Box>
        <Box
          sx={{
            position: "relative",
            width: 180,
            height: 60,
          }}
        >
          <Image
            src="/images/sponsors/Shop-Paint.png"
            alt="Sponsor Shop Paint"
            fill
            sizes="100%"
          />
        </Box>
        <Box
          sx={{
            position: "relative",
            width: 180,
            height: 60,
          }}
        >
          <Image
            src="/images/sponsors/Shop-Paint.png"
            alt="Sponsor Shop Paint"
            fill
            sizes="100%"
          />
        </Box>
        <Box
          sx={{
            position: "relative",
            width: 180,
            height: 60,
          }}
        >
          <Image
            src="/images/sponsors/Shop-Paint.png"
            alt="Sponsor Shop Paint"
            fill
            sizes="100%"
          />
        </Box>
        <Box
          sx={{
            position: "relative",
            width: 180,
            height: 60,
          }}
        >
          <Image
            src="/images/sponsors/Shop-Paint.png"
            alt="Sponsor Shop Paint"
            fill
            sizes="100%"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Sponsors;
