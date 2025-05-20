import React, { useEffect, useState } from "react";
import {
  getAllOffers,
  createOffer,
  updateOffer,
  deleteOffer,
} from "../../api/offer.js"; // Adjust the import path as needed

const OfferManager = () => {
  const [offers, setOffers] = useState([]);
  const [newOffer, setNewOffer] = useState("");

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    const data = await getAllOffers();
    setOffers(data);
  };

  const handleCreate = async () => {
    if (!newOffer.trim()) return;
    await createOffer({ name: newOffer });
    setNewOffer("");
    fetchOffers();
  };


  const handleUpdate = async (id, updatedText) => {
    try {
      const updated = await updateOffer(id, { offerText: updatedText });
      setOffers((prev) =>
        prev.map((offer) => (offer._id === id ? updated : offer))
      );
      fetchOffers();

    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const handleDelete = async (id) => {
    await deleteOffer(id);
    fetchOffers();
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Offer Manager</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="New offer name"
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={newOffer}
          onChange={(e) => setNewOffer(e.target.value)}
        />
        <button
          onClick={handleCreate}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
        >
          Add
        </button>
      </div>

      <ul className="space-y-4">
        {offers.map((offer) => (
          <li
            key={offer.id}
            className="flex items-center justify-between bg-white p-4 rounded shadow"
          >
            <span className="text-gray-800 font-medium">{offer.offerText}</span>
            <div className="space-x-2">
              <button
                onClick={() =>
                  handleUpdate(offer._id, prompt("Update offer name:", offer.offerText) || offer.offerText)
                }
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(offer._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OfferManager;
