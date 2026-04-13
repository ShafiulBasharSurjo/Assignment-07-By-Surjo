import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar";
import Footer from "../../components/Shared/Footer";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Navbar />
      <main className="grow flex flex-col items-center justify-center px-6 text-center">
        <div className="mb-6">
          <svg
            className="w-24 h-24 text-[#1D4733] opacity-20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-[#244D3F]-900 mb-4">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-[#244D3F]-800 mb-4">
          Friends Not Found
        </h2>

        <p className="text-gray-500 max-w-md mb-8 leading-relaxed">
          Sorry, the page you are looking for doesn't exist or has been moved.
          Let's get you back to your home page.
        </p>

        <Link
          to="/"
          className="bg-[#244D3F] hover:bg-[#163a2a] text-white px-10 py-3 rounded-full font-semibold transition-all duration-300 shadow-sm"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;
