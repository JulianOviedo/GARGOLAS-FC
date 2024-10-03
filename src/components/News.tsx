"use client";

import { SxProps, Theme, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";

type Props = {
  sx?: SxProps<Theme>;
};

const CONTAINER_HEIGHT = 1000;

const News: React.FC<Props> = ({ sx }) => {
  return (
    <Box
      sx={[
        {
          width: { xs: "100%" },
          height: CONTAINER_HEIGHT,
          display: "flex",
          flexDirection: "column",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: CONTAINER_HEIGHT / 2,
          "&:hover .image": {
            filter: "blur(5px)", // Aplicar blur a la imagen
          },
          "&:hover .overlay": {
            opacity: 1, // Hacer visible el overlay al hacer hover
          },
        }}
      >
        {/* Imagen */}
        <Box
          component="img"
          src="/images/gargolas-grupal-fem.png"
          alt="Imagen de ejemplo"
          className="image"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "filter 0.3s ease",
          }}
        />
        {/* Contenido superpuesto */}
        <Typography
          color="common.white"
          component="span"
          sx={{
            position: "absolute",
            top: 40,
            left: 0,
            pl: 2,
            fontSize: 24,
            fontWeight: "bolder",
            pr: 4,
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(72,114,244,1) 100%)",
          }}
        >
          NOTICIA GARGOLERA
        </Typography>
        <Typography
          className="overlay"
          component="span"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            p: 4,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            textAlign: "justify",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro semi-transparente
            color: "secondary.main",
            fontSize: 18,
            opacity: 0, // Invisible por defecto
            transition: "opacity 0.3s ease", // Transición suave en la aparición
            zIndex: 1, // Asegurarse de que esté encima de la imagen
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea
          maxime voluptatum repellendus autem, vel harum facilis ducimus
          doloribus. Harum laudantium itaque dolore temporibus nostrum qui amet
          quibusdam, fugiat quis.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: CONTAINER_HEIGHT / 4,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "50%",
            height: "100%",
          }}
        >
          <Image
            src="/images/gargolas-grupal-masculino.png"
            alt="Gargolas Futbol"
            fill
            objectFit="cover"
            sizes="100%"
          />
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "50%",
            height: "100%",
          }}
        >
          <Image
            src="/images/gargolas-grupal-masculino.png"
            alt="Gargolas Futbol"
            objectFit="cover"
            fill
            sizes="100%"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default News;
