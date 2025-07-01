import React, { useState, useEffect } from "react";
import "./Bender.css";

function Bender() {
  const [quote, setQuote] = useState(
    "Bite my shiny metal... you know the rest."
  );
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getBenderQuote = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/bender.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const quotes = await response.json();
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex].quote);
    } catch (error) {
      console.error("Failed to fetch quotes:", error);
      setQuote("My circuits are fried! Try again later, meatbag.");
      showMessage("Failed to load a quote. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBenderQuote();
  }, []);

  const showMessage = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  };

  return (
    <main className="bg-planet-express-dark text-white flex items-center justify-center min-h-screen">
      <div className="container mx-auto p-4 md:p-8 max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-planet-express-accent mb-4">
          Bender's Quote Generator
        </h1>
        <p className="text-lg text-gray-400 mb-8">Click the button, meatbag!</p>

        <div className="flex justify-center mb-8">
          <img
            id="bender-image"
            src="https://www.icegif.com/wp-content/uploads/2021/11/icegif-1618.gif"
            alt="Bender Bending Rodríguez"
            className="h-48 w-48 object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/192x192/1a202c/e74c3c?text=Bender!";
            }}
          />
        </div>

        <div className="quote-bubble p-6 rounded-lg shadow-lg min-h-[150px] flex items-center justify-center mb-8">
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            <p className="text-xl md:text-2xl text-gray-200">{quote}</p>
          )}
        </div>

        <button
          onClick={getBenderQuote}
          disabled={isLoading}
          className={`btn-planet-express text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Generate Quote
        </button>

        {errorMessage && (
          <div className="fixed top-5 right-5 bg-red-500 text-white p-4 rounded-lg shadow-lg transition-opacity duration-300">
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Bender;
