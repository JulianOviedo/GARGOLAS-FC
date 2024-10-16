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
        link: "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c93808489591ec40189613888f00286",
      },
      {
        subject: "Entrena en nuestro predio",
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
        subject: "Email - gargolasfc@gmail.com",
      },
      {
        subject: "Direccion - La SEDE JUAN COSTILLA",
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
    <>
      <Box
        component="footer"
        id="contact-section"
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
            flexDirection: { xxs: "column", sm: "row" },
            gap: 2,
            mb: 5,
            px: {xxs: 3, md: 10, xl: 30}
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: { sm: "50%" },
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
                        <Link
                          href={subItem.link}
                          color="inherit"
                          underline="hover"
                        >
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
                gap: {xxs: 2, md: 5},
              }}
            >
              {SOCIAL_MEDIA.map(({ href, icon }, idx) => (
                <Link href={href} key={idx}>
                  {icon}
                </Link>
              ))}
            </Box>
          </Box>
          <Box component="hr" sx={{ display: { xxs: "block", sm: "none" } }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              width: { xxs: "100%", sm: "50" },
            }}
          >
            <Box
              component="iframe"
              sx={{
                width: { xxs: "100%" },
                height: { xxs: 300, sm: "80%" },
              }}
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=sport%20360+(sport%20360%20canchas)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></Box>
          </Box>
        </Box>
        <Box component="hr" sx={{ display: { xxs: "none", sm: "block" } }} />
        <Typography
          component="span"
          color="white"
          sx={{
            py: 5,
            fontWeight: 100,
            fontSize: {xxs: 10, sm: 13},
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          © All right reserved | Desinged and developed by&nbsp;
          <Link
            href="https://www.linkedin.com/in/julian-oviedo-17b605136/"
            color="primary.light"
          >
            Julian Oviedo
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
