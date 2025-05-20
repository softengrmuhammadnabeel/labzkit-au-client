import React, { useState } from "react";
import { createEmail } from "../api/newsLetter.js"; // adjust path as needed

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'loading' | null

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      // We will send the email and the current date/time as subscribedAt
      const subscribedAt = new Date().toISOString();
      await createEmail(email, subscribedAt);

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Subscription failed:", error);
      setStatus("error");
    }
  };

  return (
    <div className="w-full flex justify-center items-center bg-gray-50 p-4">
      <div className="w-full bg-[#FC8A49] text-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-3 text-center">
          Subscribe to our Newsletter
        </h3>
        <p className="text-white/90 mb-5 text-center">
          Get the latest updates and offers directly in your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto max-w-lg px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-white text-[#FC8A49] font-semibold rounded-md px-6 py-3 hover:bg-white/90 transition disabled:opacity-50"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-center text-white font-semibold">
            🎉 Thanks for subscribing!
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-center text-red-200 font-semibold">
            ⚠️ Please enter a valid email or try again later.
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;
