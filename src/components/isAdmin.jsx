import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function IsAdmin({ children }) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  // If the authentication is still loading ⏳
  if (isLoading) return <p>Loading ...</p>;

  if (isLoggedIn && IsAdminUser) {
    // If the user is logged in, navigate to the admin dashboard ❌    
    return <Navigate to="/admin/dashboard" />;
  } else {
    // If the user is not logged in, allow to see the page ✅
    return children;
  }
}

export default IsAnon;