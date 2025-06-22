import LayoutPlaylist from "../components/Layout/LayoutPlaylist";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Impressum from "../pages/Impressum";
import Terms from "../pages/Terms";
import Blog from "../pages/Blog";
import Features from "../pages/Features";
import HowItWork from "../pages/HowItWork";
import Todos from "../pages/Todos";

const routes = [
  {
    path: "/",
    element: <LayoutPlaylist />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "terms",
        element: <Terms />
      },
      {
        path: "impressum",
        element: <Impressum />
      },
      {
        path: "features",
        element: <Features />
      },
      {
        path: "how-it-work",
        element: <HowItWork />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "todos",
        element: <Todos />
      },
      {
        path: "*",
        element: <Error404 />
      }
    ]
  }
];

export default routes;