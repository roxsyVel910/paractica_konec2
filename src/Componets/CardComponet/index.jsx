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
    title: "Asesor de ATC",
    daysAgo: "hace 4 días",
    location: "Lima",
    schedule: "Full Time",
    accessibilityInfo: "Accessibility Info",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacus egestas sed ac nisl est. Elit aliquam arcu enim laoreet. Viverra quam pellentesque donec enim lacus ridiculus. Tincidunt quis viverra egestas habitasse...",
  },
  {
    title: "Asesor de ATC",
    daysAgo: "hace 4 días",
    location: "Lima",
    schedule: "Full Time",
    accessibilityInfo: "Accessibility Info",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacus egestas sed ac nisl est. Elit aliquam arcu enim laoreet. Viverra quam pellentesque donec enim lacus ridiculus. Tincidunt quis viverra egestas habitasse...",
  },
  {
    title: "Asesor de ATC",
    daysAgo: "hace 4 días",
    location: "Lima",
    schedule: "Full Time",
    accessibilityInfo: "Accessibility Info",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacus egestas sed ac nisl est. Elit aliquam arcu enim laoreet. Viverra quam pellentesque donec enim lacus ridiculus. Tincidunt quis viverra egestas habitasse...",
  },
  {
    title: "Asesor de ATC",
    daysAgo: "hace 4 días",
    location: "Lima",
    schedule: "Full Time",
    accessibilityInfo: "Accessibility Info",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lacus egestas sed ac nisl est. Elit aliquam arcu enim laoreet. Viverra quam pellentesque donec enim lacus ridiculus. Tincidunt quis viverra egestas habitasse...",
  },
  // Add more card data as needed
];

function CardComponent() {
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
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" color="primary">
          {data.title}
        </Typography>
        <Typography variant="body2" color="secondary">
          {data.daysAgo}
        </Typography>
        <Box display="flex" alignItems="center">
          <LocationOnIcon fontSize="small" color="secondary" />
          <Typography variant="caption" color="textPrimary">
            {data.location}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <ScheduleIcon fontSize="small" color="secondary" />
          <Typography variant="caption" color="textPrimary">
            {data.schedule}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <AccessibleIcon fontSize="small" color="secondary" />
          <Typography variant="caption" color="textPrimary">
            {data.accessibilityInfo}
          </Typography>
        </Box>
        <Typography variant="body2" color="textPrimary">
          {data.description}
        </Typography>
        <Button
          variant="contained"
          disableElevation
          sx={{
            background: "linear-gradient(155deg, #00968F 16.03%, #615E9B 86.12%)",
            fontSize: "0.875rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          Conoce más
        </Button>
      </CardContent>
    </Card>
  );
}

export default CardComponent;
