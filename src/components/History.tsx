import { Box, SxProps, Theme } from "@mui/material";
import React from "react";
import Container from "./Container";
import HistoryCard, { HistoryCardProps } from "./HistoryCard";

type Props = {
  sx?: SxProps<Theme>;
};

const historyCards: HistoryCardProps[] = [
  {
    imageSrc: "/images/julianpateando.png",
    topImagePosition: -225,
    leftImagePosition: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aperiam voluptate dicta ea illum, totam, laborum est dolore, ipsa accusamus id dolorum molestias? Minima aliquam eos quod doloribus ipsum. Iure! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus vitae dolores magni doloribus laborum nemo tempora provident quidem, inventore, consectetur, ut hic ex sint! Corrupti consequatur deserunt voluptatibus sequi similique.",
    title: "Todo comenzo...",
  },
  {
    imageSrc: "/images/julianpateando.png",
    topImagePosition: 0,
    leftImagePosition: -50,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aperiam voluptate dicta ea illum, totam, laborum est dolore, ipsa accusamus id dolorum molestias? Minima aliquam eos quod doloribus ipsum. Iure! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus vitae dolores magni doloribus laborum nemo tempora provident quidem, inventore, consectetur, ut hic ex sint! Corrupti consequatur deserunt voluptatibus sequi similique.",
    title: "Todo comenzo...",
  },
  {
    imageSrc: "/images/julianpateando.png",
    topImagePosition: 0,
    leftImagePosition: 20,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aperiam voluptate dicta ea illum, totam, laborum est dolore, ipsa accusamus id dolorum molestias? Minima aliquam eos quod doloribus ipsum. Iure! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus vitae dolores magni doloribus laborum nemo tempora provident quidem, inventore, consectetur, ut hic ex sint! Corrupti consequatur deserunt voluptatibus sequi similique.",
    title: "Todo comenzo...",
  },
  {
    imageSrc: "/images/julianpateando.png",
    topImagePosition: -225,
    leftImagePosition: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aperiam voluptate dicta ea illum, totam, laborum est dolore, ipsa accusamus id dolorum molestias? Minima aliquam eos quod doloribus ipsum. Iure! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus vitae dolores magni doloribus laborum nemo tempora provident quidem, inventore, consectetur, ut hic ex sint! Corrupti consequatur deserunt voluptatibus sequi similique.",
    title: "Todo comenzo...",
  },
];

const History: React.FC<Props> = ({sx}) => {
  return (
    <Container
      component="section"
      id="about-section"
      sx={[{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 1,
        gap: 10,
      },
      ...(Array.isArray(sx) ? sx : [sx])
    ]}
    >
      {historyCards.map((card, index) => (
        <HistoryCard key={index} {...card} />
      ))}
      <Box component="span" sx={{
        display: {xxs: 'block', md: 'none'},
        width: '5px',
        position: 'absolute',
        zIndex: -2,
        height: '100%',
        backgroundColor: 'primary.main'
      }}/>
    </Container>
  );
};

export default History;
