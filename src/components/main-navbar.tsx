import type { FC } from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Toolbar,
} from "@mui/material";
import { Menu as MenuIcon } from "../icons/menu";
import { Logo } from "./logo";

interface MainNavbarProps {
  onOpenSidebar?: () => void;
}

export const MainNavbar: FC<MainNavbarProps> = (props) => {
  const { onOpenSidebar } = props;

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "background.primary",
        borderBottomColor: "divider",
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
        color: "text.secondary",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          <NextLink href="/" passHref>
            <a>
              <Logo
                sx={{
                  display: {
                    md: "inline",
                    xs: "none",
                  },
                  height: 52,
                  width: 45,
                  marginTop: 1,
                }}
              />
            </a>
          </NextLink>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            onClick={onOpenSidebar}
            sx={{
              display: {
                md: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box
            sx={{
              alignItems: "center",
              display: {
                md: "flex",
                xs: "none",
              },
            }}
          >
            <NextLink href="/dashboard" passHref>
              <Link color="white" underline="none" variant="subtitle2">
                Live Demo
              </Link>
            </NextLink>
            <NextLink href="/browse" passHref>
              <Link
                color="white"
                sx={{ ml: 2 }}
                underline="none"
                variant="subtitle2"
              >
                Components
              </Link>
            </NextLink>
            <NextLink href="/docs/welcome" passHref>
              <Link
                color="white"
                component="a"
                sx={{ ml: 2 }}
                underline="none"
                variant="subtitle2"
              >
                Documentation
              </Link>
            </NextLink>
            <Button
              color="info"
              component="a"
              href="authentication/login"
              size="medium"
              sx={{
                ml: 2,
              }}
              variant="contained"
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

MainNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};
