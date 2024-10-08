import { Button, SxProps, Theme, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "./Container";
import Image from "next/image";
import CurvedArrow from "@/icons/branding/CurvedArrow";

type Props = {
  sx?: SxProps<Theme>;
};

const PreFooter: React.FC<Props> = () => {
  return (
    <Container
      component="section"
      sx={{
        backgroundColor: "#1B1B1B",
        position: "relative",
        mt: 12,
        overflowX: "clip",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          py: 4,
        }}
      >
        <Typography
          color="common.white"
          sx={{
            typography: { xxs: "h6", md: "h4" },
            fontWeight: 800,
            maxWidth: { xxs: 180, md: 300 },
          }}
        >
          Sumate y Apoyanos en este Hermoso Proyecto
        </Typography>
        <Box
          sx={{
            position: " relative",
            display: "flex",
            alignSelf:{xxs: 'unset', sm: 'center'},
            width: "100%",
            maxWidth: { xxs: 150, md: 300 },
          }}
        >
          <CurvedArrow
            sx={{
              position: "absolute",
              top: { xxs: -115, sm: -135, md: -170, lg: -290 },
              transform: { xxs: "rotate(180deg)", sm: "rotate(90deg)" },
              height: { xxs: 150, md: 200, lg: 350 },
              width: { md: 300 },
              left: { xxs: 150, sm: -80, lg: -200 },
            }}
          />
          <Button
            variant="contained"
            size="large"
            href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c93808489591ec40189613888f00286"
            sx={{
              fontSize: { xxs: "unset", md: 20 },
              width: "100%",
            }}
          >
            Asociate
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: { xxs: -10, md: -50 },
          top: { xxs: -230, md: -560 },
          width: { xxs: 200, md: 500 },
          aspectRatio: 0.5,
        }}
      >
        <Image
          fill
          src="/images/julianpateando.png"
          alt="Gargolas Futbol Club"
        />
      </Box>
    </Container>
  );
};

export default PreFooter;
