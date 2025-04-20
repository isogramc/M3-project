import Actions from "./Actions";
import Message from "./Message";
import Timestamp from "./Timestamp";
import ProfileImage from "./ProfileImage";
import User from "./User";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Typography } from "@material-tailwind/react";
import BlogEdit from "./BlogEdit";

function BlogEditDelete(props) {

    // this is the link to the LIVE SERVER
    const API_URL = `${import.meta.env.VITE_API_URL}`; 
    const navigate = useNavigate();

  const DEFAULT_FORM_VALUES = {
    userId: "",
    handle: "extra_bob",
    message: "",
  };

  
  const [post, setPost] = useState({ ...DEFAULT_FORM_VALUES });
  const [show, setShow] = useState(false);

  const {id, userId, name, handle, image, time, message } = props;

  const handleEdit = () => {

    setShow(!show);
    // const requestBody = {
    //   ...post,
    // };

    // axios
    //   .put(`${API_URL}/api/posts/${id}`, requestBody)
    //   .then(() => navigate(`/dashboard`))
    //   .catch((error) => console.log(error));
  };

  const handleDelete = (e) => {

    e.preventDefault();
    
    console.log("delete", id);
    console.log(props);

    axios
    .delete(`${API_URL}/api/posts/${id}`)
    .then(() => navigate(`/dashboard`))
    .catch((error) => console.log(error));
  };

  return (
    <div key={time} className="flex flex-col blog-post">
    <div>
        <ProfileImage id={id} image={image} />

        <div className="post-body">
          <div className="top">
            <User id={id} name={name} handle={handle} />
            <Timestamp id={id} time={time} />
          </div>

          <Message id={id} message={message} />
          <Actions id={id} />
          </div>
    </div>

    {show && <div className="flex items-center gap-x-1">
        <BlogEdit id={id} message={message} />
      </div>}

      <div className="flex items-center gap-x-1">
        <Button variant="text" size="sm" className="hidden lg:inline-block" onClick={handleEdit}>
          <span> Edit </span>
        </Button>
        <Button variant="gradient" size="sm" className="hidden lg:inline-block" onClick={handleDelete}>
          <span> Delete </span>
        </Button>
      </div>

     

    </div>
  );
}

export default BlogEditDelete;
