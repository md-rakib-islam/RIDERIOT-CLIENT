import { Grid } from "@material-ui/core";
import React from "react";
import MyOders from "../MyOrders/MyOrders";

const DashBoardHome = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={7}>
        <MyOders></MyOders>
      </Grid>
    </Grid>
  );
};

export default DashBoardHome;
