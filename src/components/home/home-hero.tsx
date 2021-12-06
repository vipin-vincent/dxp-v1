import type { FC } from "react";
import NextLink from "next/link";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CheckCircleOutlined as CheckCircleOutlinedIcon } from "../../icons/check-circle-outlined";
import { Users as UsersIcon } from "../../icons/users";
import { Star as StarIcon } from "../../icons/star";
import { Template as TemplateIcon } from "../../icons/template";

export const HomeHero: FC = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        pt: 6,
      }}
      {...props}
    >
      <Container
        maxWidth="md"
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          padding:20
        }}
        
      >
        <Typography color="primary" variant="overline">
          Introducing
        </Typography>
        <Typography align="center" variant="h1">
          DXP - Digital Experience Platform 
        </Typography>
        <Typography
          align="center"
          color="textSecondary"
          variant="subtitle1"
          sx={{ py: 3 }}
        >
          This is an initial version boiler template for DXP - Digital
          Experience Platform
        </Typography>
        
      </Container>
    </Box>
  );
};
