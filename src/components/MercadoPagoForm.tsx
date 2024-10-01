import { SxProps, Theme, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import Container from "./Container";
import MercadoPagoIcon from "@/icons/MercadoPagoIcon";

type Props = {
  sx?: SxProps<Theme>;
};

const MercadoPagoForm: React.FC<Props> = ({ sx }) => {
  return (
    <Container component="section" sx={sx}>
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
          SUMATE A NUESTRA PASION
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
    </Container>
  );
};

export default MercadoPagoForm;
