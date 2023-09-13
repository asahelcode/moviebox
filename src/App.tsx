import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, MovieDetail } from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/movie/:id",
      element: <MovieDetail />,
    },
    
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
