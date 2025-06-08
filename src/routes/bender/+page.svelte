<script>
  // --- Reactive State ---
  let quote = "Bite my shiny metal... you know the rest.";
  let isLoading = false;
  let errorMessage = "";

  /**
   * Fetches a quote from the API and updates the UI state.
   */
  async function getBenderQuote() {
    isLoading = true;
    errorMessage = "";

    // --- API Endpoint for a random Bender quote ---
    const apiUrl = "https://bender.sierrasoftworks.com/api/v1/quote/bender";

    try {
      // --- Make API call ---
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const result = await response.json();

      // --- Process the response ---
      // The API returns a JSON object with a 'quote' field.
      if (result && result.quote) {
        quote = result.quote;
      } else {
        console.error("Unexpected API Response:", result);
        throw new Error("Invalid or unexpected response structure from API.");
      }
    } catch (error) {
      console.error("Error fetching Bender quote:", error);
      quote = "My circuits are fried! Try again later, meatbag.";
      showMessage("Failed to generate a quote. Please try again.");
    } finally {
      isLoading = false;
    }
  }

  /**
   * Shows a message to the user for a few seconds.
   * @param {string} message - The message to display.
   */
  function showMessage(message) {
    errorMessage = message;
    setTimeout(() => {
      errorMessage = "";
    }, 3000); // Hide after 3 seconds
  }
</script>

<main
  class="bg-planet-express-dark text-white flex items-center justify-center min-h-screen"
>
  <div class="container mx-auto p-4 md:p-8 max-w-2xl text-center">
    <!-- App Title -->
    <h1 class="text-4xl md:text-5xl font-bold text-planet-express-accent mb-4">
      Bender's Quote Generator
    </h1>
    <p class="text-lg text-gray-400 mb-8">Click the button, meatbag!</p>

    <div class="flex justify-center mb-8">
      <img
        id="bender-image"
        src="https://www.icegif.com/wp-content/uploads/2021/11/icegif-1618.gif"
        alt="Bender Bending Rodríguez"
        class="h-48 w-48 object-contain"
        onerror="this.onerror=null; this.src='https://placehold.co/192x192/1a202c/e74c3c?text=Bender!';"
      />
    </div>

    <!-- Quote Display Area -->
    <div
      class="quote-bubble p-6 rounded-lg shadow-lg min-h-[150px] flex items-center justify-center mb-8"
    >
      {#if isLoading}
        <div class="loader"></div>
      {:else}
        <p class="text-xl md:text-2xl text-gray-200">{quote}</p>
      {/if}
    </div>

    <!-- Generate Button -->
    <button
      on:click={getBenderQuote}
      disabled={isLoading}
      class="btn-planet-express text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg"
      class:opacity-50={isLoading}
      class:cursor-not-allowed={isLoading}
    >
      Generate Quote
    </button>

    <!-- Message Box -->
    {#if errorMessage}
      <div
        class="fixed top-5 right-5 bg-red-500 text-white p-4 rounded-lg shadow-lg transition-opacity duration-300"
      >
        <p>{errorMessage}</p>
      </div>
    {/if}
  </div>
</main>

<style>
  /* By default, Svelte scopes CSS to the component.
     Using :global() makes these styles apply to the whole page,
     which is what we want for body and font styles. */
  :global(body) {
    font-family: "Orbitron", sans-serif;
    background-color: #1a202c;
    margin: 0;
  }

  /* Custom Planet Express colors */
  .bg-planet-express-dark {
    background-color: #2c3e50;
  }
  .text-planet-express-accent {
    color: #e74c3c;
  } /* An orange-red accent */

  .btn-planet-express {
    background-color: #e74c3c;
    transition:
      background-color 0.3s ease,
      transform 0.2s ease,
      opacity 0.3s;
  }

  .btn-planet-express:hover:not(:disabled) {
    background-color: #c0392b;
    transform: scale(1.05);
  }

  .quote-bubble {
    position: relative;
    background: #2c3e50;
    border-radius: 0.4em;
  }

  .quote-bubble:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: #2c3e50;
    border-bottom: 0;
    border-left: 0;
    margin-left: -10px;
    margin-bottom: -20px;
  }

  .loader {
    border: 4px solid #f3f3f3;
    border-radius: 50%;
    border-top: 4px solid #e74c3c;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
