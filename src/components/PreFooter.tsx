import { Button, SxProps, Theme, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import Container from "./Container"
import Image from "next/image"

type Props = {
    sx?: SxProps<Theme>
}

const PreFooter:React.FC<Props> = () => {
    return (
        <Container component="section" sx={{
            backgroundColor: "#1B1B1B",
            position: 'relative'
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
            <Button variant="contained" size="large" sx={{
                maxWidth: 150
            }}>
                Asociate
            </Button>
            </Box>
            <Box sx={{
                position: 'absolute',
                right: 0,
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