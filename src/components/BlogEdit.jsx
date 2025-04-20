import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function BlogEdit({id, message, setShownVal}) {
  // Import the string from the .env with URL of the API/server - http://localhost:5005
  const API_URL = import.meta.env.VITE_API_URL;

  const { user } = useContext(AuthContext);
  const [userIdVal, setUserIdVal] = useState(user._id);

  const DEFAULT_FORM_VALUES = {
    _id: id,
    handle: "extra_bob",
    message: message,
  };
  
  const [post, setPost] = useState({ ...DEFAULT_FORM_VALUES });

  const navigate = useNavigate();

  const handleChange = (e) => {
   
    const { name, value } = e.target;
    //console.log(name, value);
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      ...post,
    };

    axios
      .put(`${API_URL}/api/posts/${post._id}`, requestBody)
      .then((response) => {
        const editedPost = response.data;

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="CohortCreatePage p-8 pb-16 mb-10 mt-10 rounded-lg shadow-md flex flex-col h-full relative w-full max-w-3xl mx-auto">
      <div className="flex justify-center items-center mb-4 pt-8 absolute top-0 left-0 right-0 py-2 bg-gradient-to-r shadow-sm"></div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 overflow-y-auto mt-12 px-4"
      >
        <h3 className="text-2xl font-semibold text-gray-700 mb-6 sticky left-0">
          Edit Post
        </h3>

        <label
          htmlFor="handle"
          className="text-gray-600 text-left ml-1 -mb-2 text-l font-bold"
        >
          Handle
        </label>
        <input
          type="text"
          name="handle"
          id="handle"
          value={post.handle}
          onChange={handleChange}
          disabled
          className="border rounded p-2 w-full mb-6"
        />

        <input
          type="text"
          name="userId"
          id="userId"
          value={post.userId}
          hidden
        />

        <label
          htmlFor="message"
          className="text-gray-600 text-left ml-1 -mb-2 text-l font-bold"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          value={post.message}
          onChange={handleChange}
          className="border rounded p-2 w-full mb-6 h-20 bg-gray-50 text-black"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 transition duration-150 ease-in-out"
        >
          Edit Post
        </button>
      </form>
    </div>
  );
}

export default BlogEdit;
