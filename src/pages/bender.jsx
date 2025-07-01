import React, { useState } from "react";
import "./styles/Bender.css";

const BENDER_IMAGE =
    "https://www.icegif.com/wp-content/uploads/2021/11/icegif-1618.gif";

const Bender = () => {
    const [quote, setQuote] = useState(
        "Bite my shiny metal... you know the rest."
    );
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const getBenderQuote = async () => {
        setIsLoading(true);
        setErrorMessage("");
        try {
            const response = await fetch("/bender.json");
            if (!response.ok) throw new Error("Network response was not ok");
            const quotes = await response.json();
            const randomIndex = Math.floor(Math.random() * quotes.length);
            setQuote(quotes[randomIndex].quote);
        } catch (error) {
            setQuote("My circuits are fried! Try again later, meatbag.");
            setErrorMessage("Failed to load a quote. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="bender-main">
            <div className="bender-center">
                <div className="bender-container">
                    <h1 className="bender-title">
                        Bender's Quote Generator
                    </h1>
                    <p className="bender-subtitle">
                        Click the button, meatbag!
                    </p>
                    <div className="bender-image-wrapper">
                        <img
                            id="bender-image"
                            src={BENDER_IMAGE}
                            alt="Bender Bending Rodríguez"
                            className="bender-image"
                            onError={e => {
                                e.target.onerror = null;
                                e.target.src =
                                    "https://placehold.co/192x192/1a202c/e74c3c?text=Bender!";
                            }}
                        />
                    </div>
                    <div className="bender-quote-bubble">
                        {isLoading ? (
                            <div className="loader"></div>
                        ) : (
                            <p className="bender-quote-text">{quote}</p>
                        )}
                    </div>
                    <button
                        onClick={getBenderQuote}
                        disabled={isLoading}
                        className="bender-btn"
                    >
                        Generate Quote
                    </button>
                    {errorMessage && (
                        <div className="bender-error">
                            <p>{errorMessage}</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Bender;
