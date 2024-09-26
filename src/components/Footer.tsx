import { SxProps, Theme } from "@mui/material"
import Container from "./Container"
import Logo from "./Logo"

type Props = { 
    sx?: SxProps<Theme>
}

const Footer:React.FC<Props> = ({sx}) => {
    return (
        <Container component="footer" sx={[{
            backgroundColor: 'black',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
        ]}>
            <Logo/>
        </Container>
    )
}

export default Footer