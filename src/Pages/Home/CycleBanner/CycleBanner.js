import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import bg from "../../../images/bg.png";
import bicycle from "../../../images/files/bicycle.png";
const bicycleBanner = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45,58,74, 0.7",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 175,
};

const CycleBanner = () => {
  return (
    <Box style={bicycleBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src={bicycle}
            style={{ width: 400, marginTop: "-115px" }}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",

            alignItems: "center",
            textAlign: "left",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ mb: 5 }} style={{ color: "white" }}>
              This Mounth
            </Typography>
            <Typography variant="h4" sx={{ mb: 5 }} style={{ color: "white" }}>
              Get -20% for all BMX bikes & accessories
            </Typography>
            <Typography
              variant="h6 "
              style={{ color: "white", fontWeight: 300, fontSize: 14 }}
            >
              Bicycle restoration after collisions of any severity, including
              complete rebuilding. Bicycle restoration after collisions of any
              severity, including complete rebuilding.
            </Typography>
            <br />
            <Button
              style={{ backgroundColor: "#b34d4d", marginBottom: "50px" }}
              sx={{ mt: 5 }}
              variant="contained"
            >
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CycleBanner;
