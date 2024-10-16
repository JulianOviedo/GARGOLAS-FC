"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "./Logo";
import BurgerMenuIcon from "@/icons/BurgerMenuIcon";

// Importamos el Link de react-scroll
import { Link as ScrollLink } from "react-scroll";

const pages = [
  { name: "Asociate", id: "asociate-section" },
  { name: "Sponsors", id: "sponsors-section" },
  { name: "Quienes Somos", id: "about-section" },
  { name: "Contacto", id: "contact-section" },
];

const NavBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ top: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo sx={{ display: { xxs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xxs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            GARGOLAS FC
          </Typography>

          {/* Menú para mobile */}
          <Box sx={{ flexGrow: 1, display: { xxs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <BurgerMenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xxs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <ScrollLink
                    to={page.id} // ID de la sección a la que hace scroll
                    smooth={true}
                    duration={900}
                    offset={-70} // Ajustar el offset si la cabecera tapa la sección
                    onClick={handleCloseNavMenu}
                    style={{ cursor: "pointer", textAlign: "center" }}
                  >
                    <Typography>{page.name}</Typography>
                  </ScrollLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Título para mobile */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              fontSize: 22,
              display: { xxs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            GARGOLAS F.C.
          </Typography>

          {/* Logo para mobile */}
          <Logo sx={{ display: { xxs: "flex", md: "none" }, mr: 1 }} />

          {/* Menú para desktop */}
          <Box sx={{ flexGrow: 1, display: { xxs: "none", md: "flex" }, justifyContent: "flex-end" }}>
            {pages.map((page) => (
              <ScrollLink
                key={page.id}
                to={page.id} // ID de la sección a la que hace scroll
                smooth={true}
                duration={900}
                offset={-70} // Ajustar el offset si la cabecera tapa la sección
                style={{ cursor: "pointer" }}
              >
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  {page.name}
                </Button>
              </ScrollLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
