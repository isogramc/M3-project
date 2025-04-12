import { Sidebar } from "../components/SideBar";
import { Typography } from "@material-tailwind/react";

function Dashboard() {
  return (
    <>
    <div className="flex flex-row">
      <Sidebar />
      <div className="ml-4 py-4">
        <Typography variant="h1" color="blue-gray">
          Dashboard
        </Typography>
      </div>
      </div>
    </>
  );
}

export default Dashboard;