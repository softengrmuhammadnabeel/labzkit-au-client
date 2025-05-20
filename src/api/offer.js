import axios from "./network";

// Get all offers
export const getAllOffers = async () => {
    const response = await axios.get("/offer/");
    return response.data;
};

// Create a new offer
export const createOffer = async (offerText) => {
    const response = await axios.post("/offer", { offerText });
    return response.data;
};

// Update an existing offer
export const updateOffer = async (id, offerText) => {
    const response = await axios.put(`/offer/${id}`,  offerText );
    return response.data;
};

// Delete an offer
export const deleteOffer = async (id) => {
    const response = await axios.delete(`/offer/${id}`);
    return response.data;
};
