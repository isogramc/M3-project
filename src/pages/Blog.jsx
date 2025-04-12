import "../App.css";
import BlogPost from "../components/BlogPost";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function Blog() {

    const [blogPostArray, setBlogPostArray] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("Anonymous");
    const [image, setImage] = useState("https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/tweet-user-photo.png");
    const [handle, setHandle] = useState("human");

    // this is the link to the LIVE SERVER
    const remote = `${import.meta.env.VITE_API_URL}/api/posts`;

   async function getPosts() {
       try { 
         return await axios({url: remote, 
           method: 'get',
           timeout: 8000,
           headers: {
               'Content-Type': 'application/json',
           }
         })
       } catch (error) {
         console.error(error);
       }
     }

     useEffect(() => {
         getPosts().then(function (result) {
            if(result.status === 200) {
                console.log(result.data.posts);
                setBlogPostArray(result.data.posts);
            }  
         })
     }, []);

   if(!blogPostArray){
       return <div>...Loading</div>
   }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-black">Welcome to the Timeline</h1>
      <p className=" text-black">Here you will receive real time notifications while attending your event.</p>
      <div>
        {blogPostArray && blogPostArray.map((blog, index) => (
          <BlogPost
            key={index}
            id={index}
            name={name}
            image={image}
            handle={handle}
            time={blog?.timestamp}
            message={blog?.message}
          />
        ))}
      </div>
      
      <p className="text-lg text-gray-700 mb-8">Stay tuned for updates!</p>
      <a href="/" className="text-blue-500 hover:underline">
        Back to Home
      </a>
    </div>
  );
}

export default Blog;
