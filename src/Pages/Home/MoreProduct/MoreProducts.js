import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { NavLink } from "react-router-dom";

const MoreProducts = ({ service }) => {
  const { name, description, image, _id, price } = service;

  return (
    <Grid style={{ marginTop: "30px" }} item xs={12} sm={4} md={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardMedia
          component="img"
          style={{ width: "300px", margin: "0 auto" }}
          image={image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>

          <Typography variant="h6" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="h4" color="text.secondary">
            <b>${price} </b>
          </Typography>
        </CardContent>
        <NavLink to={`/details/${service._id}`}>
          <Button style={{ marginBottom: "20px" }} variant="contained">
            Order Now
          </Button>
        </NavLink>
      </Card>
    </Grid>
  );
};

export default MoreProducts;
