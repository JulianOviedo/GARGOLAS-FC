import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import PreFooter from "@/components/PreFooter";
import Sponsors from "@/components/Sponsors";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box component='main'>
        <NavBar/>
        <Sponsors/>
      <Box component="section">
        <Box sx={{
          height: '100vh'
        }}>
        </Box>
      </Box>
      <PreFooter/>
      <Footer/>
    </Box>
  );
}
