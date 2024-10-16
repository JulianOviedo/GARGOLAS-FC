import { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import Container from "./Container";
import MercadoPagoIcon from "@/icons/MercadoPagoIcon";
import Image from "next/image";
import Logo from "./Logo";

type Props = {
  sx?: SxProps<Theme>;
};

const MercadoPagoForm: React.FC<Props> = ({ sx }) => {
  return (
    <Container
      component="section"
      id="asociate-section"
      sx={[
        {
          display: 'flex',
          alignItems: "center",
          flexDirection: { xxs: "column", md: "row" },
          gap: { md: 10 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        sx={{
          maxWidth: { xs: 480 },
          minWidth: {md: 480},
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            mb: -3,
          }}
        >
          <Typography
            component="h2"
            color="primary.main"
            sx={{
              fontSize: 30,
              fontWeight: "bolder",
              textAlign: "center",
              mb: -5,
            }}
          >
            Sumate a Nuestra Pasión
          </Typography>
          <MercadoPagoIcon />
        </Box>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <TextField
            id="name-input"
            type="text"
            label="Nombre"
            placeholder="Julian"
          />
          <TextField
            id="apellido-input"
            type="text"
            label="Apellido"
            placeholder="Oviedo"
          />
          <TextField
            id="email-input"
            type="email"
            label="Email"
            placeholder="julian_oviedo@gmail.com"
          />
          <TextField
            id="dni-input"
            type="number"
            label="DNI"
            placeholder="396783726"
          />
          <Button
            variant="contained"
            size="large"
            type="submit"
            href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c93808489591ec40189613888f00286"
            target="_blank"
          >
            Quiero ser Socio
          </Button>
          <Button
            variant="contained"
            size="large"
            type="submit"
            href="https://link.mercadopago.com.ar/gargolasfc"
            target="_blank"
          >
            Quiero Donar
          </Button>
        </Box>
      </Box>
      <Box sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        zIndex: -2,
      }}>
        <Logo sx={{
          width: {xxs: 500, sm: 800},
          height: 'unset',
          aspectRatio: 1.1,
          position: "absolute",
          opacity: .3,
          top: 0,
          left: "50%",
          transform: {xxs: 'translate(-50%, -125%)', sm: "translate(-50%, -100%)", md: "translate(-50%, -60%)"}
        }}/>
        <Box 
        sx={{
          display: {xxs: 'none', md: 'block'},
          width: 600,
          aspectRatio: 0.8,
          opacity: 0.8,
          position: 'absolute',
          top: -145,
          left: "30%"
        }}
        >
          <Image src="/images/arquera-fem.png" alt="Gargolas - Asociate" sizes="100%" fill />
        </Box>
      </Box>
    </Container>
  );
};

export default MercadoPagoForm;
