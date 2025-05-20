import axios from "./network";

// Get all newsletter emails
export const getAllEmails = async () => {
    const response = await axios.get("/newsLetter/");
    return response.data;
};

// Create a new newsletter email entry
export const createEmail = async (emails, subscribedAt) => {
    const response = await axios.post("/newsLetter", { emails, subscribedAt });
    return response.data;
};

// Update an existing newsletter email entry
export const updateEmail = async (id, emails, subscribedAt) => {
    const response = await axios.put(`/newsLetter/${id}`, { emails, subscribedAt });
    return response.data;
};

// Delete a newsletter email entry
export const deleteEmail = async (id) => {
    const response = await axios.delete(`/newsLetter/${id}`);
    return response.data;
};
