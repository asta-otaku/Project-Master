import "./App.css";
import AppRoutes from "./components/Routes";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <Auth0Provider
      domain="dev-vhvhftcfy4bnykkd.us.auth0.com"
      clientId="xBdaZ3Q47uPwFDvzj5fg95kaenozB4HC"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <AppRoutes />
    </Auth0Provider>
  );
}

export default App;
