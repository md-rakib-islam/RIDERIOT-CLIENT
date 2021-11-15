import { Alert, Button } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const [review, setReview] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.name = user?.displayName;
    data.email = user?.email;
    data.photoURL = user?.photoURL;
    fetch("https://frozen-forest-53567.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        setReview(result);
        saveReview(
          user.email,
          user.displayName,
          user.photoURL,
          review.review,
          review.rating,
          "PUT"
        );
      });
    console.log(data);
  };
  const saveReview = (email, displayName, photoURL, review, rating, method) => {
    const user = { email, displayName, photoURL };
    const reviews = { review, rating };

    fetch("https://frozen-forest-53567.herokuapp.com/addReview", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user, reviews),
    }).then();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          className=" fw-bold text-danger"
          style={{ width: "400px", height: "200px" }}
          {...register("review")}
        />
        <br />
        <select
          className="p-2 m-2 w-25 fw-bold text-danger "
          {...register("rating")}
        >
          <option value="Poor">Poor</option>
          <option value="Fair">Fair</option>
          <option value="Good">Good</option>
          <option value="VeryGood">Very Good</option>
          <option value="Excelent">Excelent</option>
        </select>
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
        <input className="btn btn-danger w-25" type="submit" />
      </form>
      {review && (
        <Alert className="text-center">
          Thank You {user.displayName} for your review
          <br /> Please Go Home for more order
          <NavLink to="/home">
            <Button> Go Home </Button>
          </NavLink>
        </Alert>
      )}
    </div>
  );
};

export default Review;
