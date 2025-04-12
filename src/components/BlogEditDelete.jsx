import Actions from "./Actions";
import Message from "./Message";
import Timestamp from "./Timestamp";
import ProfileImage from "./ProfileImage";
import User from "./User";

import { Button, Typography } from "@material-tailwind/react";

function BlogPost(props) {
  const { id, image, name, handle, time, message } = props;
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

        <i className="fas fa-ellipsis-h"></i>
      </div>

      <div className="flex items-center gap-x-1">
        <Button variant="text" size="sm" className="hidden lg:inline-block">
          <span> Edit </span>
        </Button>
        <Button variant="gradient" size="sm" className="hidden lg:inline-block">
          <span> Delete </span>
        </Button>
      </div>
    </div>
  );
}

export default BlogPost;
