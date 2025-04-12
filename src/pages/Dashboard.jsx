import { Sidebar } from "../components/SideBar";
import { Typography } from "@material-tailwind/react";

function Dashboard() {
  return (
    <>
    <div className="w-[calc(100%+48px)] flex flex-row">
      <Sidebar />
      <div className="ml-4 py-4">
        <Typography variant="h1" color="blue-gray">
          Dashboard
        </Typography>
      </div>

      <div>
        {blogPostArray.map((blog, index) => (
          <BlogPost
            key={index}
            id={index}
            name={blog.user.name}
            image={blog.user.image}
            handle={blog.user.handle}
            time={blog.timestamp}
            message={blog.message}
          />
        ))}
      </div>
      </div>
    </>
  );
}

export default Dashboard;