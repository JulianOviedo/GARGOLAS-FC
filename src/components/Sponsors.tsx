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
        CONFIAN EN NOSOTROS
      </Typography>
      <Box
        sx={[{
            width: '100%',
          display: "flex",
          flexDirection: "row",
          gap: 4,
          overflowX: "visible",  
          transform: { xs: 'translateX(calc(100vw))', md: 'unset' },
          animation: { xs: 'animateContainer 8s linear forwards infinite', md: 'unset' },
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
            minWidth: 180,
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
            minWidth: 180,
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
            minWidth: 180,
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
            minWidth: 180,
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
            minWidth: 180,
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
