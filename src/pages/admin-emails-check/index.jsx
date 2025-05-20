import React, { useState, useEffect } from 'react';
import { getAllEmails, deleteEmail } from '../../api/newsLetter.js';

const NewsletterAdmin = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    try {
      const response = await getAllEmails();
      setEmails(response);
    } catch (err) {
      console.error("Failed to fetch emails:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEmail(id);
      setEmails((prev) => prev.filter((email) => email._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="h-full bg-white p-6">
      <div className="max-w-4xl mx-auto bg-[#FC8A49] text-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-1 text-center">📧 Newsletter Subscribers</h2>
        <p className="text-xs font-semibold mb-4 text-center">Referesh the page </p>
        {emails?.length === 0 ? (
          <p className="text-center">No subscribers yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse text-left">
              <thead>
                <tr className="bg-white text-[#FC8A49] uppercase text-sm">
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Subscribed At</th>
                  <th className="px-4 py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {emails?.map((email) => (
                  <tr key={email._id} className="bg-white text-gray-700 border-b hover:bg-gray-100 transition">
                    <td className="px-4 py-2">{email.emails}</td>
                    <td className="px-4 py-2">{new Date(email.subscribedAt).toLocaleString()}</td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => handleDelete(email._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full text-sm shadow-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterAdmin;
