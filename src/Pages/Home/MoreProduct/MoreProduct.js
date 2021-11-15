import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import MoreProducts from "./MoreProducts.js";

const MoreProduct = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://frozen-forest-53567.herokuapp.com/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box>
      <Container style={{ marginTop: "100px" }}>
        <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
          Discover our more arrivals
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <MoreProducts key={service._id} service={service}></MoreProducts>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MoreProduct;
