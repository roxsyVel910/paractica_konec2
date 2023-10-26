import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Grid, Typography, Box } from "@mui/material";

function CarouselComponent(props)
{
    var items = [
      {
        image: "./src/assets/IMG_Konecta-Empleos.png",
        name: "unete a nosotros",
        title: "Encuentra el puesto que mejor se adapte a ti.",
        description:
          "Postula fácilmente a la posición que más te guste. Tenemos posiciones en: Atención al Cliente, Ventas, Crosseling, Back Office y Redes Sociales",
      },
  
      {
        image: "./src/assets/IMG_Konecta-Empleos.png",
        name: "unete a nosotros",
        title: "Encuentra el puesto que mejor se adapte a ti.",
        description:
          "Postula fácilmente a la posición que más te guste. Tenemos posiciones en: Atención al Cliente, Ventas, Crosseling, Back Office y Redes Sociales",
      },
    ]

    return (
        <Carousel
       
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
      
      <Grid container  sx = {{
        backgroundColor:"#002855",
        display: "flex",
        alignItems: "center",
        padding:"40px"
      }} >
        <Grid item xs={12} sm={5}>
          <Box sx={{maxWidth:"200px", maxHeight:"200px"}}>
          <img src={props.item.image} alt="Imagen 1" 
          style={{width: "100%", height: "100%", objectFit: "cover"}}
          />
          </Box>
        </Grid>
  
        <Grid item xs={12} sm={7} sx = {{
        backgroundColor:"#002855",
        display: "flex",
        alignItems: "center",
        
      }}>
          <Box
            justifyContent="center"
            alignItems="center"
          
          >
            <Typography variant="p" sx={{ fontSize: "25px" }} color="primary">
              {props.item.name}
            </Typography>
            <Typography variant="h1" sx={{ fontSize: "46px" }} color="#FFC72C">
              {props.item.title}
            </Typography>
            <Typography variant="p" sx={{ fontSize: "20px" }} color="#FFF">
              {props.item.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    )
}

export default CarouselComponent;
