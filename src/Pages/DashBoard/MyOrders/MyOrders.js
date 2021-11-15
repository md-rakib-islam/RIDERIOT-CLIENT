import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const MyOders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `https://frozen-forest-53567.herokuapp.com/myOrders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // Delete Item
  const handleDelete = (id) => {
    const url = `http://localhost:5000/myOrders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("deleted successfully");
          const remainingOrder = orders.filter((order) => order._id !== id);
          setOrders(remainingOrder);
        }
      });
  };
  return (
    <div>
      <h4>
        {" "}
        Welcome {user.displayName} <br />
      </h4>
      <h5>My Total Order is {orders.length}</h5>
      <TableContainer component={Paper}>
        <Table aria-label="Appointments table">
          <TableHead>
            <TableRow>
              <TableCell>Item Name</TableCell>
              <TableCell align="right">Item Price</TableCell>
              <TableCell align="right">Item ID</TableCell>
              <TableCell align="right">Cancel Order</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.name}
                </TableCell>
                <TableCell align="right">{order.price}</TableCell>
                <TableCell align="right">{order._id}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => handleDelete(order._id)}
                    className="btn btn-danger"
                  >
                    {" "}
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table aria-label="Appointments table">
          <TableHead>
            <TableRow>
              <TableCell>Total Items: {orders.length} </TableCell>
              <TableCell align="right">Total Price: </TableCell>
              <TableCell align="right">
                Total Item ID {orders.length}{" "}
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyOders;
