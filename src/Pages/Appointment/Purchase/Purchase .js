import { Alert, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Purchase = () => {
  const [orderSuccess, setOrderSuccess] = useState("");
  console.log(orderSuccess);
  const { user } = useAuth();

  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: " ",
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };
  const onSubmit = (e) => {
    setOrderSuccess(e);

    e.preventDefault();
  };

  return (
    <div className=" w-100" style={{ marginTop: "100px" }}>
      <div className="col-md-12 ">
        <h1 className="mt-5 text-center text-danger">Purchage Information</h1>
        <div className=" w-50 m-auto mt-5">
          <div className=" ">
            <div className="">
              <form onSubmit={onSubmit}>
                <TextField
                  disabled
                  onBlur={handleOnBlur}
                  sx={{ width: "90%", m: 1 }}
                  id="outlined-size-small"
                  defaultValue={user.displayName}
                  size="small"
                />
                <TextField
                  disabled
                  onBlur={handleOnBlur}
                  sx={{ width: "90%", m: 1 }}
                  id="outlined-size-small"
                  defaultValue={user.email}
                  size="small"
                />
                <TextField
                  onBlur={handleOnBlur}
                  sx={{ width: "90%", m: 1 }}
                  id="outlined-size-small"
                  defaultValue="Phone Number"
                  size="small"
                />
                <TextField
                  onBlur={handleOnBlur}
                  sx={{ width: "90%", m: 1 }}
                  id="outlined-size-small"
                  defaultValue="Address"
                  size="small"
                />

                <br />

                <input
                  type="submit"
                  value="Purchage Now"
                  className="btn btn-danger w-auto"
                />
              </form>
              {orderSuccess && (
                <Alert>
                  Order Confirmed. Thank you <br /> Please Go Home for more
                  order
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

export default Purchase;
