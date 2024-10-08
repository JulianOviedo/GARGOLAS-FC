import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

// Subcomponente para el efecto de imagen con overlay y blur
const ImageWithOverlay: React.FC<{
  src: string;
  alt: string;
  title: string;
  description: string;
  isPrimary?: boolean;
  containerHeight: number;
}> = ({ src, alt, title, description, isPrimary, containerHeight }) => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      height: isPrimary ? containerHeight / 2 : containerHeight / 3,
      "&:hover .image": {
        filter: "blur(5px)", // Aplicar blur a la imagen
      },
      "&:hover .overlay": {
        opacity: 1, // Hacer visible el overlay al hacer hover
      },
    }}
  >
    {/* Imagen */}
    <Image src={src} alt={alt} className="image" fill objectFit="cover" priority/>
    {/* Título superpuesto */}
    <Typography
      color="common.white"
      component="span"
      sx={{
        position: "absolute",
        top: 40,
        left: 0,
        pl: 2,
        fontSize: 24,
        fontWeight: "bolder",
        pr: 4,
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(72,114,244,1) 100%)",
      }}
    >
      {title}
    </Typography>
    {/* Contenido superpuesto */}
    <Typography
      className="overlay"
      component="span"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        p: 4,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        textAlign: "justify",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro semi-transparente
        color: "secondary.main",
        fontSize: 18,
        opacity: 0, // Invisible por defecto
        transition: "opacity 0.3s ease", // Transición suave en la aparición
        zIndex: 1, // Asegurarse de que esté encima de la imagen
      }}
    >
      {description}
    </Typography>
  </Box>
);

export default ImageWithOverlay;
