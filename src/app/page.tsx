import Footer from "@/components/Footer";
import MercadoPagoForm from "@/components/MercadoPagoForm";
import PreFooter from "@/components/PreFooter";
import Sponsors from "@/components/Sponsors";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box component="main">
      <Sponsors />
      <MercadoPagoForm
        sx={{
          mt: 20,
        }}
      />
      <PreFooter />
      <Footer />
    </Box>
  );
}
