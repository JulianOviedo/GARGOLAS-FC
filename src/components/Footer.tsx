import { SxProps, Theme, Typography, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "./Container";
import Logo from "./Logo";
import WhatsappIcon from "@/icons/WhatsappIcon";
import TwitterIcon from "@/icons/TwitterIcon";
import InstagramIcon from "@/icons/InstagramIcon";

type Props = {
  sx?: SxProps<Theme>;
};

type SubItem = {
  subject: string;
  link?: string;
};

type ListItem = {
  title: string;
  subItems: SubItem[];
};

const LIST_ITEMS: ListItem[] = [
  {
    title: "Nuestro Club",
    subItems: [
      {
        subject: "Asociate",
        link: "#",
      },
      {
        subject: "Entrena en nuestro predio",
        link: "#",
      },
    ],
  },
  {
    title: "Contacto",
    subItems: [
      {
        subject: "Celular - +54 9 3517 61-9357",
        link: "www.google.com",
      },
      {
        subject: "Email - julianovie234@gmail.com",
      },
      {
        subject: "Direccion - Dire de las canchas?",
      },
    ],
  },
];

const SOCIAL_MEDIA = [
  {
    icon: <WhatsappIcon />,
    href: "https://wa.me/+5493517619357",
  },
  {
    icon: <TwitterIcon />,
    href: "#",
  },
  {
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/gargolasfc/",
  },
];

const Footer: React.FC<Props> = ({ sx }) => {
  return (
    <Container
      component="footer"
      sx={[
        {
          backgroundColor: "common.black",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Logo
          sx={{
            width: 48,
            height: 64,
          }}
        />
        {LIST_ITEMS.map((item, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography
              color="white"
              sx={{
                fontWeight: 1000,
                fontSize: 24,
                letterSpacing: 1,
                mb: 1,
              }}
            >
              {item.title}
            </Typography>
            <Box component="ul">
              {item.subItems.map((subItem, subIndex) => (
                <Box
                  component="li"
                  key={subIndex}
                  sx={{ mb: 1, listStyle: "none" }}
                >
                  {subItem.link ? (
                    <Link href={subItem.link} color="inherit" underline="hover">
                      <Typography
                        component="span"
                        color="#A1A1A1"
                        sx={{
                          ml: 1,
                          fontWeight: 300,
                        }}
                      >
                        {subItem.subject}
                      </Typography>
                    </Link>
                  ) : (
                    <Typography
                      color="#A1A1A1"
                      component="span"
                      sx={{
                        ml: 1,
                        fontWeight: 300,
                      }}
                    >
                      {subItem.subject}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          {SOCIAL_MEDIA.map(({ href, icon }, idx) => (
            <Link href={href} key={idx}>
              {icon}
            </Link>
          ))}
        </Box>
        <Box component="hr" />
        <Box
          component="iframe"
          sx={{
            width: { xxs: "100%" },
            height: 300,
          }}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=sport%20360+(sport%20360%20canchas)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          {/* <a href="https://www.gps.ie/car-satnav-gps/">GPS devices</a> */}
        </Box>
        <Typography
          component="span"
          color="white"
          sx={{
            fontWeight: 100,
            fontSize: 10,
            textAlign: "center",
            mb: 2,
          }}
        >
          © All right reserved | Desinged and developed by{" "}
          <Link href="https://www.linkedin.com/in/julian-oviedo-17b605136/">
            Julian Oviedo
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
