import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

import { LocationOn, Schedule, Accessible } from "@mui/icons-material";

const DetailCard = () => {
  const cardsData = [
    {
      title: "Asesor de ATC Movistar Argentina",
      date: "Hace 4 días",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      title: "Asesor de ATC Movistar Argentina",
      date: "Hace 4 días",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      title: "Asesor de ATC Movistar Argentina",
      date: "Hace 4 días",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      title: "Asesor de ATC Movistar Argentina",
      date: "Hace 4 días",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    // Agrega más datos de tarjetas aquí
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Typography variant="h6">{card.title}</Typography>
            <Typography variant="body2">{card.date}</Typography>
            <Box
              component="span"
              sx={{
                display: "inline-block",
                mx: "2px",
                transform: "scale(0.8)",
              }}
            >
              <LocationOn />
              <Schedule />
              <Accessible />
            </Box>
            <Typography variant="p">{card.description}</Typography>
            <Button variant="contained" disableElevation>
              Conoce más
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DetailCard;