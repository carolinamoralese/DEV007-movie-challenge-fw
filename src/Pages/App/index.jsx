import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home/Index.jsx";
import PeliculasEnCartelera from "../PeliculasEnCartelera/index.jsx";
import ProximosEstrenos from "../ProximosEstrenos/index.jsx";
import NotFound from "../NotFound/index.jsx";
import PeliculasDestacadas from "../PeliculasDestacadas/index.jsx";
import Navbar from "../../Components/Navbar/index.jsx";
import "./App.css";


const AppRoutes = () => {
  let router = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cartelera",
      element: <PeliculasEnCartelera />,
    },
    {
      path: "/upcoming",
      element: <ProximosEstrenos />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
    {
      path: "/mejor-calificada",
      element: <PeliculasDestacadas />,
    },
  ]);

  return router;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
