import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { createOrder } from "../../api/orders";
import {  imagesProduct } from "../../utils/functions";
import { toast } from "react-toastify";
import EmptyContent from "../../components/EmptyCart";
import OrderFormDialog from "../../components/OrderFormDialog";
import {
  Avatar,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box, Stack, useMediaQuery } from "@mui/system";
import { GridDeleteIcon } from "@mui/x-data-grid";
import LoadingButton from "@mui/lab/LoadingButton";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, removeItem } = useCart();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    numberOne: "",
    numberTwo: "",
    address: "",
    name: "",
    email: "",
    country: "",
    city: "",
    state: "",
    postCode: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setErrors({});
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let validationErrors = {};

    if (!formData.numberOne) {
      validationErrors.numberOne = "Number is required.";
    } else if (!/^\d+$/.test(formData.numberOne)) {
      validationErrors.numberOne = "Number must contain only digits.";
    }

    if (formData.numberTwo && !/^\d+$/.test(formData.numberTwo)) {
      validationErrors.numberTwo = "Second number must contain only digits.";
    }

    if (!formData.address) {
      validationErrors.address = "Address is required.";
    }
    if (!formData.name) {
      validationErrors.address = "Name is required.";
    }
    if (!formData.email) {
      validationErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!formData.country) {
      validationErrors.country = "Country is required.";
    }

    if (!formData.city) {
      validationErrors.city = "City is required.";
    }

    if (!formData.state) {
      validationErrors.state = "State is required.";
    }

    if (!formData.postCode) {
      validationErrors.postCode = "Post code is required.";
    } else if (!/^\d+$/.test(formData.postCode)) {
      validationErrors.postCode = "Post code must contain only digits.";
    }

    setErrors(validationErrors);
    return validationErrors;
  };

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCompleteOrder = async (data) => {
    setLoading(true);

    try {
      await createOrder({ products: cartItems, ...data });
      toast.success("Order Completed");
      clearCart();
      handleClose();
    } catch (error) {
      toast.error("Couldn't complete your order!");
    } finally {
      setLoading(false);
    }
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <div className="bg-gradient-to-r from-white to-orange-50 min-h-screen py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Your <span className="text-[#fc8a49]">Shopping Cart</span>
          </h1>
          <div className="w-24 h-2 bg-[#fc8a49] rounded-full mb-6"></div>
          <p className="text-gray-700 text-lg text-center max-w-2xl">
            Review your items and complete your purchase when you're ready.
          </p>
        </div>

        {cartItems.length > 0 ? (
          <Box
            display="flex"
            flexDirection={isMobile ? "column" : "row"}
            justifyContent="space-between"
            gap={5}
          >
            {/* Cart Items Table */}
            <Paper
              elevation={0}
              sx={{
                flex: 1,
                p: 4,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                borderRadius: 3,
                overflow: "hidden",
                border: "1px solid rgba(252, 138, 73, 0.2)",
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: "#141a3c",
                  mb: 3,
                  pb: 2,
                  borderBottom: "2px solid rgba(252, 138, 73, 0.2)"
                }}
              >
                Cart Items
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600, color: "#141a3c" }}>Product</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: "#141a3c" }}>Price</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: "#141a3c" }}>Quantity</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: "#141a3c" }}>Total</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 600, color: "#141a3c" }}>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item._id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        <TableCell sx={{ display: "flex", alignItems: "center" }}>
                          <Avatar
                            variant="rounded"
                            alt={item?.name}
                            src={
                              item?.images && item?.images?.length > 0
                                ? (item?.images[0])
                                : imagesProduct[item?.gender]
                            }
                            sx={{
                              width: 72,
                              height: 72,
                              mr: 2,
                              borderRadius: 2,
                              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                            }}
                          />
                          <Stack spacing={0.5}>
                            <Typography
                              variant="subtitle1"
                              sx={{ maxWidth: 240, fontWeight: 600, color: "#141a3c" }}
                            >
                              {item.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ color: "#fc8a49", fontWeight: 500 }}
                            >
                              {item.color}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell sx={{ color: "#555" }}>${item.price.toFixed(2)}</TableCell>
                        <TableCell>
                          <Typography
                            sx={{
                              display: 'inline-block',
                              backgroundColor: 'rgba(252, 138, 73, 0.1)',
                              px: 2,
                              py: 0.5,
                              borderRadius: 1.5,
                              color: '#141a3c',
                              fontWeight: 600
                            }}
                          >
                            {item.quantity}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ fontWeight: 600, color: "#fc8a49" }}>${(item.price * item.quantity).toFixed(2)}</TableCell>
                        <TableCell align="right">
                          <IconButton
                            onClick={() => removeItem(item._id)}
                            sx={{
                              color: "#fc8a49",
                              '&:hover': {
                                backgroundColor: 'rgba(252, 138, 73, 0.1)'
                              }
                            }}
                          >
                            <GridDeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>

            {/* Order Summary */}
            <Paper
              elevation={0}
              sx={{
                flex: 0.4,
                p: 4,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                borderRadius: 3,
                minWidth: 280,
                display: "flex",
                flexDirection: "column",
                height: "fit-content",
                border: "1px solid rgba(252, 138, 73, 0.2)",
                position: "sticky",
                top: 20,
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: "#141a3c",
                  mb: 3,
                  pb: 2,
                  borderBottom: "2px solid rgba(252, 138, 73, 0.2)"
                }}
              >
                Order Summary
              </Typography>

              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography sx={{ color: "#555" }}>Total Items</Typography>
                <Typography sx={{ fontWeight: 600, color: "#141a3c" }}>{cartItems.length}</Typography>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                mb={4}
                sx={{
                  backgroundColor: 'rgba(252, 138, 73, 0.1)',
                  p: 2,
                  borderRadius: 2
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#141a3c" }}>Total Price</Typography>
                <Typography sx={{ fontWeight: 700, color: "#fc8a49", fontSize: "1.25rem" }}>
                  ${calculateTotal().toFixed(2)}
                </Typography>
              </Box>

              <div className="w-full flex flex-col sm:flex-row gap-4">
                <LoadingButton
                  fullWidth
                  variant="contained"
                  loading={loading}
                  disabled={loading}
                  onClick={handleOpen}
                  sx={{
                    backgroundColor: "#fc8a49",
                    color: "#FFFFFF",
                    fontWeight: 600,
                    py: 1.5,
                    borderRadius: 2,
                    boxShadow: "0 4px 10px rgba(252, 138, 73, 0.3)",
                    "&:hover": {
                      backgroundColor: "#e67b3f",
                    },
                  }}
                >
                  {loading ? "Processing..." : "Complete Order"}
                </LoadingButton>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={clearCart}
                  sx={{
                    color: "#141a3c",
                    borderColor: "#141a3c",
                    borderRadius: 2,
                    py: 1.5,
                    fontWeight: 600,
                    "&:hover": {
                      borderColor: "#141a3c",
                      backgroundColor: "rgba(20, 26, 60, 0.05)",
                    },
                  }}
                >
                  Clear Cart
                </Button>
              </div>
            </Paper>
          </Box>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <EmptyContent
              title="Your Cart is Empty!"
              description="Looks like you haven't added any items to your shopping cart yet."
              sx={{ pt: 3, pb: 5 }}
            />
            <Button
              variant="contained"
              onClick={() => navigate('/#categories')}
              sx={{
                backgroundColor: "#fc8a49",
                color: "#FFFFFF",
                fontWeight: 600,
                py: 1.5,
                px: 4,
                borderRadius: 2,
                boxShadow: "0 4px 10px rgba(252, 138, 73, 0.3)",
                "&:hover": {
                  backgroundColor: "#e67b3f",
                },
              }}
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </div>

      {/* Order Dialog */}
      <OrderFormDialog
        open={open}
        handleClose={handleClose}
        handleSubmit={handleCompleteOrder}
        loading={loading}
        formData={formData}
        errors={errors}
        handleChange={handleChange}
        handleValidate={validate}
      />
    </div>
  );
};

export default Cart;