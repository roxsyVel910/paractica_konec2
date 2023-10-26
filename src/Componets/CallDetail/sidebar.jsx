import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function SidebarCard() {
  return (
    <Card sx={{ maxWidth: "90%" }}>
      <CardActionArea>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={8}>
              <Typography gutterBottom variant="h6" component="div">
                Asesor de Diners
              </Typography>
              <Typography gutterBottom variant="body2" component="div">
                Atencion al cliente
              </Typography>
              <Typography
                variant="body2"
                color="text.primary"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <LocationOnIcon fontSize="small" sx={{ color: "turquoise" }} />
                <span style={{ color: "black" }}>Your Text</span>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={4} textAlign="right">
              <Typography variant="body1" component="div" textAlign="right">
                Hace un dia
              </Typography>
              <Button variant="outlined" size="small">Full time</Button>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
