'use client';
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const ImageWithOverlay: React.FC<{
  image1: string;
  image2: string;
  alt: string;
  title: string;
  description: string;
  containerHeight: number;
}> = ({ image1, image2, alt, title, description, containerHeight }) => {
  const [currentImage, setCurrentImage] = useState(image1);
  const [nextImage, setNextImage] = useState(image2);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const switchImage = () => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage === image1 ? image2 : image1));
        setFadeOut(false);
      }, 500);
    };

    const randomInterval = () => Math.floor(Math.random() * (20000 - 1000 + 1)) + 5000;

    const intervalId = setInterval(switchImage, randomInterval());

    return () => clearInterval(intervalId);
  }, [image1, image2]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xxs: containerHeight / 4, sm: containerHeight / 2 },
        "&:hover .image": {
          filter: "blur(5px)",
        },
        "&:hover .overlay": {
          opacity: 1,
        },
      }}
    >
      {/* Imagen actual */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transition: "opacity 0.5s ease",
          opacity: fadeOut ? 0 : 1,
          zIndex: 1,
        }}
      >
        <Image src={currentImage} alt={alt} className="image" fill objectFit="cover" priority />
      </Box>

      {/* Imagen siguiente */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transition: "opacity 0.5s ease",
          opacity: fadeOut ? 1 : 0,
          zIndex: 0,
        }}
      >
        <Image src={nextImage} alt={alt} className="image" fill objectFit="cover" priority />
      </Box>

      {/* Título superpuesto */}
      <Typography
        color="common.white"
        component="span"
        sx={{
          position: "absolute",
          top: { xxs: 20, sm: 40 },
          left: 0,
          pl: 10,
          fontSize: { xxs: 18, sm: 24 },
          fontWeight: "bolder",
          pr: 4,
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(72,114,244,1) 100%)",
          zIndex: 2,
        }}
      >
        {title}
      </Typography>

      {/* Contenido superpuesto */}
      <Typography
        className="overlay"
        component="span"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          p: { xxs: 4, sm: 8 },
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          textAlign: "justify",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "secondary.main",
          fontSize: { xxs: 14, sm: 18 },
          opacity: 0,
          transition: "opacity 0.3s ease",
          zIndex: 2,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default ImageWithOverlay;
