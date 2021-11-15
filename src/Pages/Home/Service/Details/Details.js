import { Alert, Button } from "@mui/material";
import { React, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
const Details = () => {
  const [details, setDetails] = useState({});
  const { serviceId } = useParams();
  const [orderSuccess, setOrderSuccess] = useState(false);
  const { user } = useAuth();
  console.log(serviceId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;

    fetch("https://frozen-forest-53567.herokuapp.com/addOrders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setOrderSuccess(true);
        }
      });
    setOrderSuccess(true);
    console.log(data);
  };

  useEffect(() => {
    fetch(
      `https://frozen-forest-53567.herokuapp.com/singleService/${serviceId}`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    <div className="row w-100 mt-4">
      <div className="col-md-5">
        <img className="w-100" src={details.image}></img>
        <p>{details.name}</p>
      </div>
      <div className="col-md-7 mt-4">
        <h1 className="mt-5 text-center text-danger">Product Details</h1>
        <div className=" w-50 m-auto mt-5">
          <div className=" ">
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name", { required: true })}
                  placeholder="Name"
                  defaultValue={details.name}
                  className="p-2 m-2 w-100 input-field"
                />
                <input
                  {...register("description", { required: true })}
                  placeholder="Description"
                  defaultValue={details.description}
                  className="p-2 m-2 w-100 input-field"
                />
                <input
                  {...register("image", { required: true })}
                  placeholder="Image Link"
                  defaultValue={details.image}
                  className="p-2 m-2 w-100 input-field"
                />
                <input
                  {...register("price", { required: true })}
                  placeholder="Price"
                  defaultValue={details.price}
                  type="number"
                  className="p-2 m-2 w-100 input-field"
                />
                <select {...register("model")} className="p-2 m-2 w-100">
                  <option value="premium">Premium</option>
                  <option value="classic">Classic</option>
                  <option value="business">Business</option>
                </select>
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Add Cart"
                  className="btn btn-danger w-auto"
                />
                <Link to="/purchase">
                  <input
                    style={{ marginLeft: "50px" }}
                    type="submit"
                    value="Purchage Now"
                    className="btn btn-danger w-auto"
                  />
                </Link>
              </form>
              {orderSuccess && (
                <Alert>
                  {" "}
                  Order Confirmed. Thank you <br /> Please Go Home for more
                  order{" "}
                  <NavLink to="/home">
                    <Button> Go Home </Button>
                  </NavLink>
                </Alert>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
