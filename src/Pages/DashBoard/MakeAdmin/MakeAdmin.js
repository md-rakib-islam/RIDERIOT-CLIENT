import { Alert, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [adminSuccess, setAdminSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://frozen-forest-53567.herokuapp.com/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setEmail("");
          setAdminSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Make an Admin</h2>

      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%" }}
          style={{ marginBottom: "10px" }}
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <br />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {adminSuccess && (
        <Alert severity="success">Admin Added Successfully</Alert>
      )}
    </div>
  );
};

export default MakeAdmin;
