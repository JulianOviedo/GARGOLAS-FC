'use client'
import { Box, keyframes, SxProps, Theme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import HistoryCard, { HistoryCardProps } from "./HistoryCard";
import CurvedArrow from "@/icons/branding/CurvedArrow";

type Props = {
  sx?: SxProps<Theme>;
};

const historyCards: HistoryCardProps[] = [
  {
    imageSrc: "/images/julianpateando.png",
    topImagePosition: -225,
    leftImagePosition: 100,
    description:
      "Gárgolas inicia su travesía en el año 2012, gracias al inquebrantable espíritu de un grupo de apasionados por el fútbol. Con mucho olfato y determinación, se forma el primer equipo, producto de la fusión entre las promociones 2009 y 2010 del San Buenaventura y la generación del '92 de la U. Desde ese momento, la pasión por el fútbol nos ha guiado en un camino lleno de logros y aprendizajes.",
    title: "Todo comenzo...",
  },
  {
    imageSrc: "/images/julianpateando.png",
    topImagePosition: 0,
    leftImagePosition: -50,
    description:
      "El viaje de Gárgolas comenzó en el ámbito del Fútbol 5, donde nuestras primeras experiencias fueron forjando la identidad de un equipo que ya empezaba a soñar. Con el tiempo, pasamos al Fútbol 7 y, finalmente, nos aventuramos en el Fútbol 11. A lo largo de los años, hemos recorrido diversas canchas y compartido momentos inolvidables con jugadores que han dejado su huella. Muchos de nosotros seguimos formando parte de este hermoso equipo, unidos por la misma pasión.",
    title: "De Fútbol 5 a un sueño más grande...",
  },
  {
    imageSrc: "/images/julianpateando.png",
    topImagePosition: 0,
    leftImagePosition: 20,
    description:
      "Con el deseo de crecer y avanzar, decidimos dar este importante paso institucional. Creemos firmemente en la necesidad de ampliar las bases de este proyecto que hoy disfrutamos. ¿Por qué no soñar con instalaciones propias? ¿Por qué no contar con nuestra propia cancha? Y, ¿por qué no pertenecer a un campeonato oficial? Aunque parezcan metas lejanas, también lo parecía en su momento la idea de que Gárgolas se convirtiera en un club. Hoy, estas aspiraciones están más cerca que nunca.",
    title: "Apostando al futuro...",
  },
  {
    imageSrc: "/images/julianpateando.png",
    topImagePosition: -225,
    leftImagePosition: 100,
    description:
      "Con el arranque del cobro de la cuota social, comenzamos a darle forma a todas estas palabras y sueños que compartimos. El aporte puede ser pequeño, pero recordamos que lo poco siempre es mejor que nada. Convencidos de que el trabajo colectivo siempre supera al individual, invitamos a todos a sumarse a este emocionante proyecto. Juntos, somos más fuertes, y juntos, llevaremos a Gárgolas hacia un futuro prometedor.",
    title: "Juntos en la misma dirección...",
  },
];

const evenCardAnimation = keyframes`
0% {
  transform: translateX(-1200px) scale(1.5);
}
100% {
  transform: translateX(0) scale(1);
}
`;

const oddCardAnimation = keyframes`
0% {
  transform: translateX(1200px) scale(1.8);
}
100% {
  transform: translateX(0) scale(1);
}
`;

const History: React.FC<Props> = ({ sx }) => {
  const [animateCards, setAnimateCards] = useState<boolean[]>(Array(historyCards.length).fill(false));
  const historyRefs = useRef<(HTMLDivElement | null)[]>(Array(historyCards.length).fill(null));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = historyRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index >= 0) {
            setAnimateCards((prev) => {
              const newArray = [...prev];
              newArray[index] = true; // Cambia el estado para la tarjeta visible
              return newArray;
            });
          }
        }
      });
    });

    historyRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      historyRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <Box
      component="section"
      id="about-section"
      sx={[
        {
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1,
          gap: 10,
          px: {xxs: 3}
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <CurvedArrow
        sx={{
          display: {xxs: 'none', md: 'block'},
          position: "absolute",
          top: 61,
          left: "41%",
          transform: "translateX(-50%) rotate(250deg) scaleX(-1)",
          height: 400,
          width: 500,
        }}
      />
        <CurvedArrow
        sx={{
          display: {xxs: 'none', md: 'block'},
          position: "absolute",
          top: 560,
          left: "57%",
          transform: "translateX(-50%) rotate(95deg)",
          height: 400,
          width: 500,
        }}
      />
      <CurvedArrow
        sx={{
          display: {xxs: 'none', md: 'block'},
          position: "absolute",
          top: 1000,
          left: "41%",
          transform: "translateX(-50%) rotate(250deg) scaleX(-1)",
          height: 400,
          width: 500,
        }}
      />
      {historyCards.map((card, index) => (
        <Box
          key={index}
          ref={(el: HTMLDivElement | null) => {historyRefs.current[index] = el}}
          sx={(theme) => ({
            [theme.breakpoints.up('md')] : {
            ...(index % 2 === 0 ? { ml: 80 } : { mr: 80 }),
            animation: animateCards[index]
              ? (index % 2 === 0 ? `${evenCardAnimation} 0.5s ease-out` : `${oddCardAnimation} 0.5s ease-out`)
              : 'none', 
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }
          })}
        >
          <HistoryCard {...card} />
        </Box>
      ))}
      <Box
        component="span"
        sx={{
          display: { xxs: "block", md: "none" },
          width: "5px",
          position: "absolute",
          zIndex: -2,
          height: "100%",
          backgroundColor: "primary.main",
        }}
      />
    </Box>
  );
};

export default History;