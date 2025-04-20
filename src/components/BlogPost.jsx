import Actions from './Actions'
import Message from './Message'
import Timestamp from './Timestamp'
import ProfileImage from './ProfileImage';
import User from './User'
function BlogPost(props) {
  const {id, image, name, handle, time, message} = props;
  return (
    <div key={time} className="blog-post">
      <div className="w-full p-4">
        <div className="flex flex-row">
          <ProfileImage id={id} image={image} />
          <div className='text-amber-950'>
            <div className="flex flex-row text-amber-950">
              <User id={id} name={name} handle={handle} />
              <Timestamp id={id} time={time} />
            </div>
            <Message id={id} message={message} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default BlogPost;
