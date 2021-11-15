import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const CustomerReview = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useAuth();
  //   console.log(reviews);
  useEffect(() => {
    fetch("https://frozen-forest-53567.herokuapp.com/addReview")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <Box>
      <h1>What our clients say</h1>
      <Grid container spacing={2} style={{ marginTop: "30px" }}>
        {reviews.map((review) => (
          <Grid item xs={12} md={4}>
            <Card style={{ margin: "20px" }} sx={{ minWidth: 275 }}>
              <CardContent>
                <CardMedia>
                  <img
                    style={{
                      width: "80px",
                      borderRadius: "50%",
                    }}
                    src={review.photoURL}
                    alt=""
                  />
                </CardMedia>
                <Typography variant="h5" component="div">
                  {review.displayName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {review.review}
                </Typography>
                <Typography variant="body2">{review.rating}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CustomerReview;
