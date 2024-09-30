import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import PreFooter from "@/components/PreFooter";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box component='main'>
      <Box component="section">
        <NavBar/>
        <Box sx={{
          height: '100vh'
        }}>
          {/* <Box sx={{
            position: 'relative',
            width: '100%',
            height: 380
          }}>
            <Image src="/images/gargoMain.png" alt="gargolas fc" fill/>
          </Box> */}
        </Box>
      </Box>
      <PreFooter/>
      <Footer/>
    </Box>
  );
}
