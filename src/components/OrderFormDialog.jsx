import React from "react";
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    TextareaAutosize,
    Typography
} from "@mui/material";

const OrderFormDialog = ({
    open,
    handleClose,
    handleSubmit: onSubmit,
    loading,
    formData,
    errors,
    handleChange,
    handleValidate
}) => {

    const handleSubmit = () => {
        const validationErrors = handleValidate();
        if (Object.keys(validationErrors).length > 0) {
            return;
        }
        onSubmit(formData);
    };

    const textFieldSx = {
        "& .MuiOutlinedInput-root": {
            borderRadius: "0px",
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "gray", // Default border
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fc8a49", // Hover border
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#e67b3f", // Focus border
                borderWidth: "2px",
            },
            "&.Mui-focused": {
                boxShadow: "none",
            },
            "& input": {
                outline: "none",
            },
        },
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth="sm"
            PaperProps={{
                sx: {
                    borderRadius: 3,
                    padding: 2,
                    maxHeight: "90vh",
                    overflowY: "auto",
                    background: "linear-gradient(to bottom right, #fff, #fff9f6)",
                },
            }}
        >
            <DialogTitle
                sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "1.5rem",
                    color: "#141a3c",
                    pb: 2,
                }}
            >
                Complete Your Order
                <div className="w-24 h-2 bg-[#fc8a49] rounded-full mx-auto mt-2"></div>
            </DialogTitle>
            <DialogContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    pt: 3,
                }}
            >
                <Typography variant="body2" color="textPrimary" gutterBottom>
                    Contact Information
                </Typography>

                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-gray-700">Full Name</span>
                    <TextField
                        autoFocus
                        name="name"
                        type="text"
                        size="small"
                        fullWidth
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        variant="outlined"
                        placeholder="Enter your Full Name"
                        sx={textFieldSx}
                        InputLabelProps={{ shrink: false }}
                        label=""
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-gray-700">Email Address</span>
                    <TextField
                        autoFocus
                        name="email"
                        type="text"
                        size="small"
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        variant="outlined"
                        placeholder="Enter your Email Address"
                        sx={textFieldSx}
                        InputLabelProps={{ shrink: false }}
                        label=""
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-gray-700">Phone Number</span>
                    <TextField
                        autoFocus
                        name="numberOne"
                        type="text"
                        size="small"
                        fullWidth
                        value={formData.numberOne}
                        onChange={handleChange}
                        error={!!errors.numberOne}
                        helperText={errors.numberOne}
                        variant="outlined"
                        placeholder="Enter your phone number"
                        sx={textFieldSx}
                        InputLabelProps={{ shrink: false }}
                        label=""
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-gray-700">Second Phone Number (Optional)</span>
                    <TextField
                        name="numberTwo"
                        type="text"
                        size="small"
                        fullWidth
                        value={formData.numberTwo}
                        onChange={handleChange}
                        error={!!errors.numberTwo}
                        helperText={errors.numberTwo}
                        variant="outlined"
                        placeholder="Enter alternate phone number"
                        sx={textFieldSx}
                        InputLabelProps={{ shrink: false }}
                        label=""
                    />
                </div>

                <Typography variant="body2" color="textPrimary" gutterBottom>
                    Shipping Address
                </Typography>

                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-gray-700">Address</span>
                    <TextField
                        name="address"
                        type="text"
                        fullWidth
                        size="small"
                        value={formData.address}
                        onChange={handleChange}
                        error={!!errors.address}
                        helperText={errors.address}
                        variant="outlined"
                        placeholder="Enter your address"
                        sx={textFieldSx}
                        InputLabelProps={{ shrink: false }}
                        label=""
                    />
                </div>

                <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex flex-col gap-1 w-full">
                        <span className="text-sm font-medium text-gray-700">City</span>
                        <TextField
                            name="city"
                            type="text"
                            fullWidth
                            size="small"
                            value={formData.city}
                            onChange={handleChange}
                            error={!!errors.city}
                            helperText={errors.city}
                            variant="outlined"
                            placeholder="Enter your city"
                            sx={textFieldSx}
                            InputLabelProps={{ shrink: false }}
                            label=""
                        />
                    </div>

                    <div className="flex flex-col gap-1 w-full">
                        <span className="text-sm font-medium text-gray-700">State</span>
                        <TextField
                            name="state"
                            type="text"
                            fullWidth
                            size="small"
                            value={formData.state}
                            onChange={handleChange}
                            error={!!errors.state}
                            helperText={errors.state}
                            variant="outlined"
                            placeholder="Enter your state"
                            sx={textFieldSx}
                            InputLabelProps={{ shrink: false }}
                            label=""
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex flex-col gap-1 w-full">
                        <span className="text-sm font-medium text-gray-700">Country</span>
                        <TextField
                            name="country"
                            type="text"
                            fullWidth
                            size="small"
                            value={formData.country}
                            onChange={handleChange}
                            error={!!errors.country}
                            helperText={errors.country}
                            variant="outlined"
                            placeholder="Enter your country"
                            sx={textFieldSx}
                            InputLabelProps={{ shrink: false }}
                            label=""
                        />
                    </div>

                    <div className="flex flex-col gap-1 w-full">
                        <span className="text-sm font-medium text-gray-700">Post Code</span>
                        <TextField
                            name="postCode"
                            type="text"
                            fullWidth
                            size="small"
                            value={formData.postCode}
                            onChange={handleChange}
                            error={!!errors.postCode}
                            helperText={errors.postCode}
                            variant="outlined"
                            placeholder="Enter your post code"
                            sx={textFieldSx}
                            InputLabelProps={{ shrink: false }}
                            label=""
                        />
                    </div>
                </div>

                <Typography variant="body2" color="textPrimary" gutterBottom>
                    Additional Information
                </Typography>

                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-gray-700">Additional Notes (Optional)</span>
                    <TextareaAutosize
                        name="description"
                        placeholder="Enter any additional notes here"
                        minRows={1}
                        value={formData.description}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "12px",
                            borderRadius: "10px",
                            border: "1px solid #e0e0e0",
                            fontSize: "0.9rem",
                            fontFamily: "inherit",
                            transition: "all 0.3s",
                            outline: "none",
                            minHeight: "100px",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#fc8a49")}
                        onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                    />
                </div>
            </DialogContent>
            <div
                style={{
                    position: "sticky",
                    bottom: 0,
                    background: "white",
                    padding: "1.5rem",
                    display: "flex",
                    gap: "1rem",
                    borderTop: "1px solid rgba(252, 138, 73, 0.2)",
                    zIndex: 2,
                }}
            >
                <Button
                    fullWidth
                    onClick={handleSubmit}
                    variant="contained"
                    disabled={loading}
                    sx={{
                        borderRadius: "8px",
                        padding: "0.75rem",
                        textTransform: "none",
                        fontWeight: 600,
                        backgroundColor: "#fc8a49",
                        boxShadow: "0 4px 10px rgba(252, 138, 73, 0.3)",
                        "&:hover": { backgroundColor: "#e67b3f" },
                    }}
                >
                    {loading ? "Processing..." : "Submit Order"}
                </Button>
                <Button
                    fullWidth
                    onClick={handleClose}
                    variant="outlined"
                    sx={{
                        borderRadius: "8px",
                        padding: "0.75rem",
                        textTransform: "none",
                        fontWeight: 600,
                        color: "#141a3c",
                        borderColor: "#141a3c",
                        "&:hover": {
                            backgroundColor: "rgba(20, 26, 60, 0.05)",
                            borderColor: "#141a3c"
                        },
                    }}
                >
                    Cancel
                </Button>
            </div>
        </Dialog>
    );
};

export default OrderFormDialog;