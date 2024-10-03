import Footer from "@/components/Footer";
import History from "@/components/History";
import MercadoPagoForm from "@/components/MercadoPagoForm";
import News from "@/components/News";
import PreFooter from "@/components/PreFooter";
import Sponsors from "@/components/Sponsors";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box component="main" sx={{
      overflowX: 'clip'
    }}>
      <Sponsors />
      <News/>
      <MercadoPagoForm
        sx={{
          mt: 20,
        }}
      />
      <History sx={{
        mt:20
      }}/>
      <PreFooter />
      <Footer />
    </Box>
  );
}
