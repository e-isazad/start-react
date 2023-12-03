import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes";
import { UserContextProvider, RegeContextProvider, CategoryContextProvider, RegisterContextProvider, LoginContextProvider, CountryContextProvider } from "./services/context";

const routes = createBrowserRouter(ROUTES);

function App() {
  return (
    <CountryContextProvider>
      <RegeContextProvider>
        <RegisterContextProvider>
          <LoginContextProvider>
            <CategoryContextProvider>
              <UserContextProvider>
                <RouterProvider router={routes} />
              </UserContextProvider>
            </CategoryContextProvider>
          </LoginContextProvider>
        </RegisterContextProvider>
      </RegeContextProvider>
    </CountryContextProvider>




  );
}

export default App;
