import { Button, SxProps, Theme, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import Container from "./Container"
import Image from "next/image"
import CurvedArrow from "@/icons/branding/CurvedArrow"

type Props = {
    sx?: SxProps<Theme>
}

const PreFooter:React.FC<Props> = () => {
    return (
        <Container component="section" sx={{
            backgroundColor: "#1B1B1B",
            position: 'relative',
            mt: 12,
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                py: 4,
            }}>
            <Typography variant="h6" color="common.white" sx={{
                fontWeight: 800,
                maxWidth: 180
            }}>
                Sumate y Apoyanos en este Hermoso Proyecto
            </Typography>
            <CurvedArrow sx={{
                position: 'absolute',
                top: 50,
                transform: 'rotate(180deg)',
                height: 150,
                left: 180,
            }}/>
            <Button variant="contained" size="large" sx={{
                maxWidth: 150
            }}>
                Asociate
            </Button>
            </Box>
            <Box sx={{
                position: 'absolute',
                right: -10,
                top: -230,
                width: 200,
                height: 400,
            }}>
            <Image fill src="/images/julianpateando.png" alt="Gargolas Futbol Club" />
            </Box>
        </Container>
    )
}

export default PreFooter