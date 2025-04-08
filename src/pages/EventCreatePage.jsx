import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Import the string from the .env with URL of the API/server - http://localhost:5005
const API_URL = import.meta.env.VITE_API_URL;

const DEFAULT_FORM_VALUES = {
  name: "",
  numberOfGuests: ""
}

function EventCreatePage() {
  const [event, setEvent] = useState({ ...DEFAULT_FORM_VALUES });
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEventCreateSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { name, numberOfGuests };
  }

  return (
    <>

      <h1>Create Event</h1>
      <form
        onSubmit={handleEventCreateSubmit}
        className="grid grid-cols-1 gap-4 overflow-y-auto mt-12 px-4"
      >  
       <h3 className="text-2xl font-semibold text-gray-700 mb-6 sticky left-0">
          Let's get started!
        </h3>
        <label
          htmlFor="name"
          className="text-gray-600 text-left ml-1 -mb-2 text-l font-bold"
        >
          Give your event a name:
        </label>
        <input
          type="name"
          name="name"
          id="name"
          value={eventName}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6"
          autoComplete="off"
        />
       <label
          htmlFor="numberOfGuests"
          className="text-gray-600 text-left ml-1 -mb-2 text-l font-bold"
        >
          How many guests will be attending?
        </label>
        <input
          type="numberOfGuests"
          name="numberOfGuests"
          id="numberOfGuests"
          value={numberOfGuests}
          onChange={handleNumberOfGuests}
          className="border rounded p-2 w-full mb-6"
          autoComplete="off"
        />
      
      {/* Do you have the guest list ready? If yes, please upload the file. */}
      {/* What is the date of the event? */}
      Where would you like to have the event? (We recommend the following locations for your event: Restaurant, Park, Beach, Other)
      What are you celebrating? (Wedding, Birthday, Corporate, Baby Shower, Graduation, Anniversary, Other)
      What is the dress code of the event?
      What is the budget of the event?
      What menu would you prefer?
      </form>
    </>
  );
}   
export default EventCreatePage;