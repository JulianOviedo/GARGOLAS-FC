import Footer from "@/components/Footer";
import History from "@/components/History";
import MercadoPagoForm from "@/components/MercadoPagoForm";
import News from "@/components/News";
import PreFooter from "@/components/PreFooter";
import Sponsors from "@/components/Sponsors";
import Box from "@mui/material/Box";
import { newsData } from "./data";
import Image from "next/image";

export default function Home() {
  return (
    <Box component="main" sx={{
      overflowX: 'clip'
    }}>
      {/* <Box sx={{
        // objectFit: 'contain',
        height: '93vh',
        width: '100%'
      }}>
        <Image src="/images/asdasd.jpeg" alt="" fill objectFit="contain"/>
      </Box> */}
      <News newsData={newsData}/>
      <Sponsors />
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
