import { createBrowserRouter, RouterProvider } from "react-router-dom";
import History from "./pages/about/history";
import Home from "./pages/home";
import Electricity from "./pages/knowledge/electricity";
import Advertise from "./pages/news/advertise";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about/history",
      element: <History />,
    },
    {
      path: "/nesw/advertise",
      element: <Advertise />,
    },
    {
      path: "/knowledge/electricity",
      element: <Electricity />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
