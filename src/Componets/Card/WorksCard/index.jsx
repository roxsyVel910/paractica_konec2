import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from "@mui/icons-material/Schedule";
import AccessibleIcon from "@mui/icons-material/Accessible";

const theme = createTheme();

const cardData = [
  {
    title: "Atencion al Cliente Banca",
    daysAgo: "hace 4 días",
    location: "Lima",
    schedule: "Full Time",
    accessibilityInfo: "Accessibility Info",
  },
  {
    title: "Atencion al Cliente Banca",
    daysAgo: "hace 4 días",
    location: "Lima",
    schedule: "Full Time",
    
  },
  {
    title: "Atencion al Cliente Banca",
    daysAgo: "hace 4 días",
    location: "Lima",
    schedule: "Full Time",
    
  },
  {
    title: "Atencion al Cliente Banca",
    daysAgo: "hace 4 días",
    location: "Lima",
    schedule: "Full Time",
    
  },
];

function WorksCard() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container spacing={2}>
          {cardData.map((data, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              {renderCard(data)}
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

function renderCard(data) {
  return (
    
    
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" , padding:"22px 10px",borderRadius: "14px", background: "#FFF", boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.25)" }}>
         
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" color="primary">
          {data.title}
        </Typography>
        <Typography variant="body2" color="secondary">
          {data.daysAgo}
        </Typography>
        <Box display="flex" alignItems="center">
          
        </Box>
        <Box display="flex" alignItems="center">
        <LocationOnIcon fontSize="small" color="secondary" />
          <Typography variant="caption" color="textPrimary">
            {data.location}
          </Typography>
          <ScheduleIcon fontSize="small" color="secondary" />
          <Typography variant="caption" color="textPrimary">
            {data.schedule}
          </Typography>
          <AccessibleIcon fontSize="small" color="secondary" />
         
        </Box>
        <Box display="flex" alignItems="center">
          
        </Box>
       
       
      </CardContent>
    </Card>
  );
}

export default WorksCard;
