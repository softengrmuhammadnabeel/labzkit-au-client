import axios from "./network";

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post("/users/register", userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

// Login user
export const loginUser = async (credentials) => {
  try {
    console.log(process.env.REACT_APP_USER_EMAIL)
    console.log(credentials.username)
    console.log(process.env.REACT_APP_USER_PASSWORD)
    console.log(credentials.password)
    if (credentials.username === process.env.REACT_APP_USER_EMAIL && credentials.password === process.env.REACT_APP_USER_PASSWORD) {
      localStorage.setItem("isAdmin", "true");
      console.log("------>>------")
      console.log(process.env.REACT_APP_USER_EMAIL)
    console.log(credentials.username)
    console.log(process.env.REACT_APP_USER_PASSWORD)
    console.log(credentials.password)
      // navigate("/admin/products");
    } else {
      alert("Invalid credentials");
    }
    return true
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

// Forgot password
export const forgotPassword = async (email) => {
  try {
    const response = await axios.post("/users/forget-password", { email });
    return response.data;
  } catch (error) {
    console.error("Error requesting password reset:", error);
    throw error;
  }
};

// Reset password
export const resetPassword = async (token, password) => {
  try {
    const response = await axios.put(`/users/reset-password/${token}`, {
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
};
