import LoginButton from  "./components/login";
import LogoutButton from "./components/logout";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div>
      {isAuthenticated ? 
      <li> {user.name}  <LogoutButton></LogoutButton></li> 
      : <li><LoginButton></LoginButton> </li> }
    </div>
  );
}

export default App;
