// React Router Dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import MainLayout from "./layout/MainLayout";

// Pages
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import CreateRecipe from "./pages/CreateRecipe";
import SavedRecipes from "./pages/SavedRecipes";

// Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        errorElement: <Error />,
      },
      {
        path: "/Auth",
        element: <Auth />,
        errorElement: <Error />,
      },
      {
        path: "/CreateRecipe",
        element: <CreateRecipe />,
        errorElement: <Error />,
      },
      {
        path: "/SavedRecipes",
        element: <SavedRecipes />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
