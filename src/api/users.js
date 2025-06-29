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

    if (credentials.username === process.env.REACT_APP_USER_EMAIL && credentials.password === process.env.REACT_APP_USER_PASSWORD) {
      localStorage.setItem("userToken", "A2m9L@*&92bjadmIuhuq88mAj8mqdna--AosdamnASMDjajd-as9mALMJAL12nalmdl23@**dns");
      localStorage.setItem("randomKey1", "https://example.com/abc123/def456?param=xyz789");
      localStorage.setItem("uuid1", "550e8400-e29b-41d4-a716-446655440000");
      localStorage.setItem("authKey", "87wq@ndja93lasK*&89ahwjn-kjsamndiOAUSDjaj9Jknald02-sandLKANSd@81ja2n9ALsmLks");
      localStorage.setItem("randomKey2", "http://weird-url.com/3knd82mAJxld0ad9Aml");
      localStorage.setItem("uuid2", "c56a4180-65aa-42ec-a945-5fd21dec0538");
      localStorage.setItem("encryptedData", "8lKASndjq9A*&nlkQjAmL*&8malkmsN2ajKldJ0aKLAS8ndajk9AosdkNAL8mknsdAKld02nak");
      localStorage.setItem("tempFileKey", "ftp://storage.server.com/file_upload/98JajsLm");
      localStorage.setItem("uuid3", "f47ac10b-58cc-4372-a567-0e02b2c3d479");
      localStorage.setItem("dummyConfig", "ws://realtime.api.com/subscribe?token=random12345");
      localStorage.setItem("randomKey3", "api-key-8ak9a8n3o9AJx8a92mla");
      localStorage.setItem("uuid4", "123e4567-e89b-12d3-a456-426614174000");
      localStorage.setItem("sessionID", "http://secure-site.org/login?session=1234xyz");
      localStorage.setItem("isAdmin", "true");
      localStorage.setItem("uuid5", "9f1c2e12-9e07-4be4-b3e6-b74ccbcf6d87");
      return true
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
